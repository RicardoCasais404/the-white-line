"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 py-12 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neutral-50 via-white to-white opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl"
      >
        {/* The "Issue" Label */}
        <span className="mb-6 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
          The Cocaine Archive • Vol. I
        </span>

        {/* The Manifesto Headline */}
        <h1 className="mb-8 font-sans text-5xl leading-tight font-black tracking-tighter text-black uppercase md:text-7xl lg:text-8xl">
          The Substance.
          <br />
          The Science.
          <br />
          The Safety.
        </h1>

        {/* The Mission Statement */}
        <p className="mx-auto mb-12 max-w-2xl font-serif text-lg leading-relaxed text-neutral-600 md:text-xl">
          An objective, judgment-free archive of pharmacological facts,
          historical context, and harm reduction strategies for cocaine users.
          Understanding the mechanism is the first step towards safety.
        </p>

        {/* Single Primary Action */}
        <div className="flex justify-center">
          <Link
            href="/knowledge/preface"
            className="group flex w-full items-center justify-center gap-3 border border-black bg-black px-10 py-5 font-sans text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-neutral-800 sm:w-auto"
          >
            The Creator's Manifesto
            <BookOpen className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-white" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
