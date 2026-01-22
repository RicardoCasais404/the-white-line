"use client";

import { useState } from "react";
import Link from "next/link";
import { interactions, RiskLevel } from "@/lib/interactions";
import {
  ArrowLeft,
  Search,
  AlertTriangle,
  Skull,
  AlertCircle,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function InteractionChecker() {
  const [query, setQuery] = useState("");

  // Filter logic
  const filtered = interactions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  // Helper to style risk badges
  const getRiskStyles = (risk: RiskLevel) => {
    switch (risk) {
      case "Lethal":
        return "bg-black text-white border-black"; // Maximum contrast
      case "High Risk":
        return "bg-red-600 text-white border-red-600";
      case "Unsafe":
        return "bg-amber-400 text-black border-amber-400";
      case "Caution":
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
      default:
        return "bg-neutral-100 text-neutral-600";
    }
  };

  const getRiskIcon = (risk: RiskLevel) => {
    if (risk === "Lethal") return <Skull className="h-4 w-4" />;
    if (risk === "High Risk") return <AlertTriangle className="h-4 w-4" />;
    return <AlertCircle className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
      {/* Navigation */}
      <div className="mx-auto mb-12 max-w-4xl">
        <Link
          href="/tools"
          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Toolkit
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 border-b border-black pb-8">
          <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
            Harm Reduction Database
          </span>
          <h1 className="mb-6 font-sans text-4xl font-black tracking-tighter text-black uppercase md:text-5xl">
            Interaction Check.
          </h1>
          <p className="max-w-2xl font-serif text-lg text-neutral-600">
            Cocaine (Benzoylmethylecgonine) is pharmacologically possessive. It
            reacts volatilely with many other substances. Check before you mix.
          </p>
        </div>

        {/* Search Bar */}
        <div className="sticky top-4 z-10 mb-12">
          <div className="relative shadow-xl shadow-neutral-100/50">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search substance (e.g. Alcohol, Xanax)..."
              className="w-full border border-neutral-200 bg-white py-4 pr-4 pl-12 font-sans text-lg transition-all outline-none placeholder:text-neutral-300 focus:border-black focus:ring-1 focus:ring-black"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="group border border-neutral-100 bg-white p-6 transition-all hover:border-black md:p-8"
              >
                {/*
                    UPDATED LAYOUT:
                    flex-col for mobile (vertical stack),
                    md:flex-row for desktop (horizontal)
                */}
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-sans text-xl font-bold tracking-wide text-black uppercase">
                      {item.name}
                    </h3>
                    <span className="font-serif text-sm text-neutral-400 italic">
                      {item.category}
                    </span>
                  </div>

                  {/* self-start ensures the badge doesn't stretch to full width on mobile */}
                  <div className="self-start">
                    <div
                      className={cn(
                        "flex items-center gap-2 rounded-full border px-4 py-1.5 font-sans text-xs font-bold tracking-widest uppercase",
                        getRiskStyles(item.risk),
                      )}
                    >
                      {getRiskIcon(item.risk)}
                      {item.risk}
                    </div>
                  </div>
                </div>

                <p className="mb-4 font-serif text-neutral-700">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Info className="h-3 w-3" />
                  <span className="font-bold tracking-wider uppercase">
                    Mechanism:
                  </span>
                  <span className="font-serif italic">{item.mechanism}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="font-serif text-neutral-400">
                No matches found in our database.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
