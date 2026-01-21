import Link from "next/link";
import { Timer, AlertTriangle, Activity, ArrowRight } from "lucide-react";

const tools = [
  {
    id: "timer",
    title: "Session Timer",
    description:
      "Track time between doses. preventing accumulation and overdose risks.",
    icon: Timer,
    href: "/tools/timer",
  },
  {
    id: "interactions",
    title: "Interaction Checker",
    description:
      "Verify safety profiles before mixing substances (Alcohol, SSRIs, etc).",
    icon: AlertTriangle,
    href: "/tools/interactions",
  },
  {
    id: "assessment",
    title: "Self-Assessment",
    description:
      "A grounded reality check. Monitor your physical and emotional baseline.",
    icon: Activity,
    href: "/tools/assessment",
  },
];

export const metadata = {
  title: "Safety Toolkit | The White Line.",
  description: "Interactive tools for harm reduction.",
};

export default function ToolsIndex() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-20 max-w-3xl">
        <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
          Active Measures
        </span>
        <h1 className="mb-6 font-sans text-4xl font-black tracking-tighter text-black uppercase md:text-6xl">
          Safety Toolkit.
        </h1>
        <p className="font-serif text-lg text-neutral-600 md:text-xl">
          Practical utilities designed to assist in harm reduction. Use these
          tools to monitor usage, track time, and maintain awareness.
        </p>
      </div>

      {/* The Tools List (Vertical Layout for ease of use) */}
      <div className="flex flex-col gap-px bg-neutral-200">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className="group relative flex items-center justify-between bg-white p-8 transition-all hover:bg-neutral-50 md:p-12"
          >
            <div className="flex items-start gap-6 md:items-center">
              {/* Icon */}
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white md:flex">
                <tool.icon className="h-8 w-8" />
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold tracking-wide text-black uppercase md:text-2xl">
                  {tool.title}
                </h3>
                <p className="max-w-xl font-serif text-neutral-500 group-hover:text-neutral-900">
                  {tool.description}
                </p>
              </div>
            </div>

            {/* Action Arrow */}
            <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 text-neutral-400 transition-all group-hover:border-black group-hover:text-black">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
