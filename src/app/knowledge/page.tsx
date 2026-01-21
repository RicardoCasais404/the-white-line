import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Clock,
  ShieldAlert,
  Activity,
} from "lucide-react";

// This data would eventually come from a database or CMS.
// For now, we structure it here to define our Information Architecture.
const categories = [
  {
    id: "preface",
    title: "00. The Preface",
    description:
      "Why we must break the silence. Understanding addiction as a physiological trap, not a moral failure.",
    icon: BookOpen, // The open book
    href: "/knowledge/preface",
  },
  {
    id: "pharmacology",
    title: "01. Pharmacology",
    description:
      "Mechanism of action. How the alkaloid interacts with dopamine transporters and the central nervous system.",
    icon: Brain,
    href: "/knowledge/pharmacology",
  },
  {
    id: "effects",
    title: "02. Physiological Effects",
    description:
      "Short-term and long-term systemic impact on the heart, brain, and vascular system.",
    icon: Activity,
    href: "/knowledge/effects",
  },
  {
    id: "risks",
    title: "03. Risk Analysis",
    description:
      "Objective data on overdose thresholds, cutting agents (levamisole), and interaction warnings.",
    icon: ShieldAlert,
    href: "/knowledge/risks",
  },
  {
    id: "history",
    title: "04. Historical Context",
    description:
      "From the Andean indigenous usage to the modern synthesized hydrochloride era.",
    icon: Clock,
    href: "/knowledge/history",
  },
  {
    id: "reduction",
    title: "05. Harm Reduction",
    description:
      "Evidence-based protocols for safer consumption, dosage control, and aftercare.",
    icon: ShieldAlert, // Re-using Shield or similar, maybe 'LifeBuoy' if available
    href: "/knowledge/reduction",
  },
];
export const metadata = {
  title: "The Archive | The White Line.",
  description:
    "Comprehensive data regarding pharmacology, history, and safety.",
};

export default function KnowledgeIndex() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24">
      {/* Page Header */}
      {/* Page Header */}
      <div className="mb-20 max-w-3xl">
        <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
          Compassion Through Understanding
        </span>
        <h1 className="mb-6 font-sans text-4xl font-black tracking-tighter text-black uppercase md:text-6xl">
          The Human Context.
        </h1>
        <p className="font-serif text-lg text-neutral-600 md:text-xl">
          To judge is to isolate. To understand is to heal. Here is the full
          picture—biological, historical, and emotional—stripped of the stigma
          and the deliberate omission of facts that prevents an honest, unbiased
          perspective.
        </p>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative flex flex-col justify-between bg-white p-8 transition-all hover:bg-neutral-50"
          >
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 font-sans text-lg font-bold tracking-wide text-black uppercase">
                {item.title}
              </h3>

              <p className="font-serif text-neutral-500 group-hover:text-neutral-900">
                {item.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase transition-colors group-hover:text-black">
              Access Module
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
