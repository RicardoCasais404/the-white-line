"use client";

import { useState, useRef } from "react";
import { assessmentSections } from "@/lib/assessment-data";
import { Download, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { cn } from "@/lib/utils";

export default function AssessmentTool() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [otherValues, setOtherValues] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Toggle Checkbox Logic
  const handleToggle = (id: string) => {
    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  // Handle "Other" Text Input
  const handleOtherChange = (id: string, value: string) => {
    setOtherValues((prev) => ({ ...prev, [id]: value }));
  };

  // PDF Generation Logic
  const handleDownloadPDF = async () => {
    if (!formRef.current) return;
    setIsGenerating(true);

    try {
      // We wait for fonts to load to avoid glitchy text
      await document.fonts.ready;

      const canvas = await html2canvas(formRef.current, {
        scale: 2, // High resolution
        backgroundColor: "#ffffff",
        useCORS: true,
        // This forces standard logging to help debug if needed
        logging: false,
      });

      const imgWidth = 210; // A4 width (mm)
      const pageHeight = 297; // A4 height (mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF("p", "mm", "a4");

      // If the content is taller than 1 page, we might need logic for that,
      // but for now we scale it to fit or let it stretch (simplified for stability).
      // If it's very long, it might shrink. Ideally, this fits on 1-2 pages.
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight,
      );
      pdf.save("Pattern-Recognition-Report.pdf");
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    // Added pb-32 to fix the overlap with the bottom bar
    <div className="min-h-screen bg-white px-6 py-12 pb-32 md:px-12 lg:px-24">
      {/* Navigation */}
      <div className="mx-auto mb-12 max-w-4xl">
        <Link
          href="/tools"
          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-[#a3a3a3] uppercase transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Toolkit
        </Link>
      </div>

      {/* Header */}
      <div className="mx-auto mb-16 max-w-4xl border-b border-black pb-8">
        <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-[#a3a3a3] uppercase">
          Confidential Tool
        </span>
        <h1 className="mb-6 font-sans text-4xl font-black tracking-tighter text-black uppercase md:text-5xl">
          Pattern Recognition.
        </h1>
        <p className="max-w-2xl font-serif text-lg text-[#525252]">
          This form is designed to identify the emotional and environmental
          triggers of your usage. Data is processed locally in your browser and
          is never sent to a server.
        </p>
      </div>

      {/* THE FORM AREA (Printed) */}
      {/* We use Hardcoded HEX colors here to prevent html2canvas crashing on Tailwind's 'lab/oklch' colors */}
      <div ref={formRef} className="mx-auto max-w-4xl bg-white p-4 md:p-8">
        <div className="space-y-16">
          {assessmentSections.map((section) => (
            <section
              key={section.title}
              className="border-t border-[#f5f5f5] pt-8"
            >
              <h3 className="mb-8 font-sans text-lg font-bold tracking-wide text-black uppercase">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12">
                {section.options.map((option) => {
                  const isChecked = selectedValues.includes(option.id);

                  return (
                    <div key={option.id} className="flex items-start gap-3">
                      {/* Custom Checkbox */}
                      <button
                        onClick={() => handleToggle(option.id)}
                        className={cn(
                          "mt-1 flex h-5 w-5 shrink-0 items-center justify-center border transition-all",
                          // HEX colors for border
                          isChecked
                            ? "border-black bg-black"
                            : "border-[#d4d4d4] hover:border-black",
                        )}
                      >
                        {isChecked && <div className="h-2 w-2 bg-white" />}
                      </button>

                      <div className="flex-1">
                        <span
                          onClick={() => handleToggle(option.id)}
                          className={cn(
                            "cursor-pointer font-serif select-none",
                            // HEX colors for text
                            isChecked
                              ? "font-medium text-black"
                              : "text-[#525252] hover:text-black",
                          )}
                        >
                          {option.label}
                        </span>

                        {/* "Other" Input Field */}
                        {option.hasOther && isChecked && (
                          <input
                            type="text"
                            placeholder="Please specify..."
                            className="mt-2 w-full border-b border-[#d4d4d4] bg-transparent py-1 font-serif text-sm text-black outline-none focus:border-black"
                            onChange={(e) =>
                              handleOtherChange(option.id, e.target.value)
                            }
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer for PDF context */}
        <div className="mt-16 border-t-2 border-black pt-4 text-center">
          <p className="font-sans text-[10px] font-bold tracking-widest text-[#a3a3a3] uppercase">
            Generated via The White Line • Private Assessment
          </p>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <div className="fixed right-0 bottom-0 left-0 border-t border-[#e5e5e5] bg-white/95 p-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <button
            onClick={() => {
              setSelectedValues([]);
              setOtherValues({});
            }}
            className="flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-[#a3a3a3] uppercase hover:text-black"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="flex items-center gap-3 bg-black px-8 py-3 font-sans text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-[#262626] disabled:opacity-50"
          >
            {isGenerating ? "Generating..." : "Download Report"}
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
