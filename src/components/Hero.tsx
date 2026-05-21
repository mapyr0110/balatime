/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Sparkles, Star, ShieldCheck } from "lucide-react";
import { HERO_ILLUSTRATION } from "../data/websiteData";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--color-bg)]">
      {/* Decorative whimsical circles in background */}
      <div className="absolute top-1/4 -left-12 w-48 h-48 rounded-full bg-[var(--color-primary)]/10 opacity-60 blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-64 h-64 rounded-full bg-[var(--color-accent-blue)]/10 opacity-70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Soft premium badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[var(--color-ink)] border border-[rgba(0,0,0,0.05)] shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
              <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[var(--color-primary)]">
                BALATIME SCHOOL • Детский Центр & Знания
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-ink)] font-bold leading-tight tracking-tight mb-6"
            >
              Бережное обучение, которое <span className="font-brand text-[var(--color-accent-blue)] italic select-none">влюбляет</span> детей в учебу
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-[var(--color-ink-light)] leading-relaxed mb-8 max-w-xl"
            >
              Современный премиальный центр развития в Алматы. Подготовка к школе, английский, домашние задания и казахский язык в атмосфере дружбы, игры и искренней поддержки.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScrollToSection("#form-order")}
                className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[#D97924] text-white font-display text-sm font-bold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[rgba(242,143,59,0.3)] uppercase tracking-wider"
              >
                Записаться на урок
              </button>
              
              <button
                onClick={() => handleScrollToSection("#programs")}
                className="px-8 py-4 bg-white hover:bg-[var(--color-bg)] border border-[rgba(0,0,0,0.08)] text-[var(--color-ink)] font-display text-sm font-bold rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Подробнее</span>
                <ArrowDown className="w-4 h-4 text-[var(--color-ink-light)] animate-bounce" />
              </button>
            </motion.div>

            {/* Soft Credibility Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-[rgba(0,0,0,0.05)] mt-12 pt-8"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-[var(--color-ink)]">4.9 / 5</span>
                  <span className="font-sans text-[11px] text-[var(--color-ink-light)]">Рейтинг от родителей</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-accent-blue)]/10 flex items-center justify-center text-[var(--color-accent-blue)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-[var(--color-ink)]">до 8 детей</span>
                  <span className="font-sans text-[11px] text-[var(--color-ink-light)]">В каждой группе</span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-accent-green)]/10 flex items-center justify-center text-[var(--color-accent-green)]">
                  <span className="font-brand font-bold text-xs text-[var(--color-accent-green)]">100%</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-[var(--color-ink)]">Гарантия</span>
                  <span className="font-sans text-[11px] text-[var(--color-ink-light)]">результата и комфорта</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Magical Illustration Block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-4/3 lg:aspect-square w-full rounded-3xl overflow-hidden bg-white border border-[rgba(0,0,0,0.04)] smooth-shadow-deep p-6 flex items-center justify-center"
            >
              {/* Top and side playful circles */}
              <div className="absolute top-4 right-4 bg-white border border-[rgba(0,0,0,0.05)] text-[var(--color-ink)] text-[10px] uppercase tracking-wide font-bold px-3 py-1 rounded-full pointer-events-none">
                Almaty 🌸
              </div>
              <img
                src={HERO_ILLUSTRATION}
                alt="BALATIME SCHOOL Children Studying Whimsical Illustration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain select-none"
              />
            </motion.div>

            {/* Little floating element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-lg flex items-center gap-3 max-w-[200px]"
            >
              <span className="text-2xl">🧸</span>
              <div className="flex flex-col text-left">
                <span className="font-display text-xs font-bold text-[var(--color-ink)]">Учимся играя</span>
                <span className="font-sans text-[10px] text-[var(--color-ink-light)]">без скучной зубрежки</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
