import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Generate Metadata dynamically (for SEO)
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return { title: "Not Found" };

  return {
    title: `${article.title} | The White Line.`,
  };
}

// 2. The Page Component
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  // If the article doesn't exist in our registry, show 404
  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-24">
      {/* Navigation Back */}
      <div className="mx-auto mb-16 max-w-3xl">
        <Link
          href="/knowledge"
          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Index
        </Link>
      </div>

      {/* Article Header */}
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-6 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
          {article.kicker}
        </span>
        <h1 className="mb-8 font-sans text-4xl leading-tight font-black tracking-tighter text-black uppercase md:text-6xl">
          {article.title}
        </h1>
        <div className="mx-auto h-1 w-24 bg-black" />
      </header>

      {/* Article Body - The "Editorial" Look */}
      <div className="mx-auto max-w-2xl">
        {article.content.map((paragraph, index) => (
          <p
            key={index}
            className="mb-8 font-serif text-lg leading-relaxed text-neutral-800 md:text-xl md:leading-loose"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer / Signature */}
      <div className="mx-auto mt-20 max-w-2xl border-t border-neutral-200 pt-8 text-center">
        <p className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">
          The White Line Archive
        </p>
      </div>
    </article>
  );
}
