"use client";

import { useRef } from "react";
import { AnimatedSection, AnimatedText } from "./AnimatedSection";
import ProductCard from "./ProductCard";
import { services } from "@/data/products";

function HorizontalStrip({
  title,
  items,
}: {
  title: string;
  items: typeof services;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[12px] tracking-[0.2em] text-dark-brown uppercase font-medium">
          {title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 border border-beige flex items-center justify-center text-walnut hover:bg-cream transition-colors"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 border border-beige flex items-center justify-center text-walnut hover:bg-cream transition-colors"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 md:-mx-10 md:px-10 snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-none w-[220px] md:w-[260px] snap-start">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewArrivalsSection() {
  const newItems = services.filter((s) => s.isNew);
  const popularItems = services.filter((s) => s.isPopular);

  return (
    <section id="space" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center"
        >
          Curated Picks
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-serif text-3xl md:text-4xl text-dark-brown text-center mb-16"
          delay={0.1}
        >
          큐레이션 컬렉션
        </AnimatedText>

        <AnimatedSection delay={0.2}>
          <HorizontalStrip title="New" items={newItems} />
          <HorizontalStrip title="Popular" items={popularItems} />
        </AnimatedSection>
      </div>
    </section>
  );
}
