"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "The Knowledge", href: "/knowledge" },
  { name: "Safety Tools", href: "/tools" },
  { name: "Emergency", href: "/emergency", isEmergency: true },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
        {/* Logo - Sans Serif, Bold, Uppercase */}
        <Link
          href="/"
          className="font-sans text-xl font-black uppercase tracking-tighter text-black"
        >
          The White Line.
        </Link>

        {/* Desktop Navigation - Sans Serif, Spaced, Uppercase */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-all",
                // Conditional Styling
                item.isEmergency
                  ? "bg-black px-6 py-3 text-white hover:bg-neutral-800" // Monochromatic Button
                  : "text-neutral-500 hover:text-black", // Standard Link
                // Active State
                pathname === item.href &&
                  !item.isEmergency &&
                  "text-black underline underline-offset-8",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon (Simple Lines) */}
        <button className="flex flex-col gap-1.5 md:hidden">
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>
    </nav>
  );
}
