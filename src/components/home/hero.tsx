"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-10 text-center">
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
          Understanding the mechanism is the first step towards safety. It is
          time to break the stigma, and learn how to help.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/knowledge"
            className="group flex items-center gap-3 border border-black bg-black px-8 py-4 font-sans text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black"
          >
            Read The Data
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/tools"
            className="group flex items-center gap-3 border border-neutral-200 px-8 py-4 font-sans text-sm font-bold tracking-widest text-neutral-500 uppercase transition-all hover:border-black hover:text-black"
          >
            Safety Toolkit
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
