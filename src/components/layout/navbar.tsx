"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "The Archive", href: "/knowledge" },
  { name: "Safety Tools", href: "/tools" },
  { name: "Interaction Check", href: "/tools/interactions" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans text-xl font-black tracking-tighter text-black uppercase"
            onClick={() => setIsOpen(false)}
          >
            The White Line.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-all",
                  pathname === item.href
                    ? "text-black underline underline-offset-8"
                    : "text-neutral-500 hover:text-black",
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Emergency Button (Desktop) - UPDATED TEXT */}
            <Link
              href="/knowledge/reduction"
              className="bg-black px-6 py-3 font-sans text-xs font-bold tracking-widest text-white uppercase hover:bg-neutral-800"
            >
              Harm Reduction Protocols
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-black md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-neutral-100 bg-white px-8 py-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-xl font-bold tracking-widest text-neutral-800 uppercase"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Button - UPDATED TEXT */}
              <Link
                href="/knowledge/reduction"
                onClick={() => setIsOpen(false)}
                className="w-full bg-black py-4 text-center font-sans text-sm font-bold tracking-widest text-white uppercase"
              >
                Harm Reduction Protocols
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
