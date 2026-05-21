/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { REVIEWS } from "../data/websiteData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative cute cloud/blob graphics in background */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[var(--color-accent-green)]/10 opacity-60 blur-xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-48 h-48 rounded-full bg-[var(--color-primary)]/10 opacity-60 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">Отзывы родителей</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4 animate-pulse">
            Почему мамы и папы Алматы доверяют нам
          </h2>
          
          <p className="font-sans text-base text-[var(--color-ink-light)]">
            Лучшая оценка нашей работы — искры радости в глазах детей и спокойствие их родителей. Почитайте их истории успехов.
          </p>
        </div>

        {/* Carousel Block Parent Container */}
        <div className="relative bg-white rounded-[36px] border border-[rgba(0,0,0,0.05)] p-8 md:p-14 shadow-lg shadow-[rgba(45,52,54,0.03)]">
          {/* Big Quote background Icon */}
          <div className="absolute top-6 right-8 text-[var(--color-bg)] select-none pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5px] rotate-180" />
          </div>

          <div className="relative min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-left flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Parent Avatar Photo */}
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl overflow-hidden shrink-0 border border-[rgba(0,0,0,0.05)] shadow-inner relative bg-[var(--color-bg)]">
                  <img
                    src={activeReview.avatarUrl}
                    alt={activeReview.parentName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Star review ratings and Quote paragraphs */}
                <div className="flex-grow flex flex-col">
                  {/* Stars list */}
                  <div className="flex items-center gap-1 mb-4 justify-start">
                    {Array.from({ length: activeReview.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>

                  <blockquote className="font-serif text-lg md:text-xl text-[var(--color-ink-light)] leading-relaxed italic mb-6">
                    &ldquo;{activeReview.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col">
                    <span className="font-display text-base font-bold text-[var(--color-ink)]">
                      {activeReview.parentName}
                    </span>
                    <span className="font-sans text-xs text-[var(--color-accent-blue)] uppercase font-semibold tracking-wider mt-0.5">
                      {activeReview.childNameAndAge}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation controls footer */}
            <div className="flex items-center justify-between border-t border-[rgba(0,0,0,0.04)] mt-10 pt-6">
              {/* Dots progress indicator indicators */}
              <div className="flex gap-2">
                {REVIEWS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIdx === currentIndex ? "w-6 bg-[var(--color-accent-blue)]" : "w-2 bg-[rgba(0,0,0,0.08)]"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Action Buttons list */}
              <div className="flex gap-2.5">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-xl bg-white border border-[rgba(0,0,0,0.05)] text-[var(--color-ink)] hover:bg-[rgba(45,52,54,0.04)] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-xl bg-[var(--color-accent-blue)] text-white hover:bg-[#4E9ADC] transition-colors flex items-center justify-center cursor-pointer shadow-md shadow-[rgba(93,169,233,0.3)]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
