/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, UsersRound } from "lucide-react";
import { HERO_ILLUSTRATION } from "../data/websiteData";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (!target) return;

    const headerOffset = 96;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const trustItems = [
    { icon: <Star className="h-5 w-5" />, value: "4.9 / 5", label: "оценка родителей" },
    { icon: <UsersRound className="h-5 w-5" />, value: "5-12 лет", label: "возраст детей" },
    { icon: <ShieldCheck className="h-5 w-5" />, value: "до 8 детей", label: "в группе" },
  ];

  const learningSteps = [
    { title: "Диагностика", progress: "100%", color: "bg-[var(--color-accent-blue)]" },
    { title: "План обучения", progress: "76%", color: "bg-[var(--color-accent-green)]" },
    { title: "Поддержка семьи", progress: "88%", color: "bg-[var(--color-primary)]" },
  ];

  return (
    <section id="hero" className="bg-[var(--color-bg)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="max-w-3xl font-sans text-4xl font-black leading-[1.05] text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
            >
              BALATIME SCHOOL для детей 5-12 лет
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[var(--color-ink-light)]"
            >
              Подготовка к школе, английский, казахский язык и помощь с домашними заданиями в спокойной среде, где ребёнку понятно, интересно и не страшно ошибаться.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => handleScrollToSection("#form-order")}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-4 font-display text-base font-bold text-white shadow-[0_12px_28px_rgba(244,147,66,0.22)] transition-transform hover:-translate-y-0.5"
              >
                Записаться на пробный урок
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => handleScrollToSection("#programs")}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#D8E5F1] bg-white px-7 py-4 font-display text-base font-bold text-[var(--color-ink)] transition-colors hover:bg-[#F1F6FB]"
              >
                Смотреть программы
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-[#D8E5F1] bg-white p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[var(--color-accent-blue)]">
                    {item.icon}
                  </div>
                  <div className="font-display text-lg font-black text-[var(--color-ink)]">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold text-[var(--color-ink-light)]">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[32px] border border-[#D8E5F1] bg-white p-4 smooth-shadow-deep">
              <div className="rounded-[24px] bg-[#F4F8FC] p-5">
                <img
                  src={HERO_ILLUSTRATION}
                  alt="Дети учатся и работают вместе в BALATIME SCHOOL"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-contain"
                />
              </div>

              <div className="mt-5 grid gap-3">
                {learningSteps.map((step) => (
                  <div key={step.title} className="rounded-2xl border border-[#E1EAF3] bg-white p-4">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-[var(--color-ink)]">
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-green)]" />
                        {step.title}
                      </div>
                      <span className="text-xs font-extrabold text-[var(--color-ink-light)]">{step.progress}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#EAF0F6]">
                      <div className={`h-full rounded-full ${step.color}`} style={{ width: step.progress }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
