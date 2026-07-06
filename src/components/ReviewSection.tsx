"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedText } from "./AnimatedSection";
import { reviews } from "@/data/products";

export default function ReviewSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section className="py-24 md:py-32 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center"
        >
          Reviews
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-serif text-3xl md:text-4xl text-warm-white text-center mb-16"
          delay={0.1}
        >
          고객 후기
        </AnimatedText>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto relative">
            {/* Decorative quote */}
            <span className="absolute -top-6 -left-2 md:-left-8 font-serif text-[8rem] md:text-[10rem] text-brass/15 leading-none select-none pointer-events-none">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4 md:px-12"
              >
                <p className="text-warm-white/90 text-base md:text-lg leading-relaxed mb-8">
                  {review.text}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-[13px] text-warm-white font-medium">
                    {review.name}
                  </span>
                  <span className="w-px h-3 bg-stone/40" />
                  <span className="text-[12px] text-stone/70">
                    {review.date}
                  </span>
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-brass"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-10 h-10 border border-stone/30 flex items-center justify-center text-stone hover:text-warm-white hover:border-stone/60 transition-colors"
                aria-label="Previous review"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <span className="text-[12px] text-stone/60 tracking-wider">
                {current + 1} / {reviews.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 border border-stone/30 flex items-center justify-center text-stone hover:text-warm-white hover:border-stone/60 transition-colors"
                aria-label="Next review"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
