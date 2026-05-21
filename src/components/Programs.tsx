/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Languages,
  PencilRuler,
  UserRoundCheck,
} from "lucide-react";
import { PROGRAMS } from "../data/websiteData";
import { Program } from "../types";

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const themeMap = {
    red: {
      panel: "bg-[#FFF4F1]",
      icon: "bg-[#FFE4DC] text-[var(--color-primary)]",
      text: "text-[var(--color-primary)]",
      button: "bg-[var(--color-primary)]",
    },
    blue: {
      panel: "bg-[#F0F7FF]",
      icon: "bg-[#E2F1FF] text-[var(--color-accent-blue)]",
      text: "text-[var(--color-accent-blue)]",
      button: "bg-[var(--color-accent-blue)]",
    },
    teal: {
      panel: "bg-[#F0FBF9]",
      icon: "bg-[#DDF8F4] text-[var(--color-accent-green)]",
      text: "text-[var(--color-accent-green)]",
      button: "bg-[var(--color-accent-green)]",
    },
    orange: {
      panel: "bg-[#FFF8E8]",
      icon: "bg-[#FFF0C8] text-[#B78016]",
      text: "text-[#B78016]",
      button: "bg-[var(--color-accent-yellow)] text-[var(--color-ink)]",
    },
    green: {
      panel: "bg-[#F0FBF9]",
      icon: "bg-[#DDF8F4] text-[var(--color-accent-green)]",
      text: "text-[var(--color-accent-green)]",
      button: "bg-[var(--color-accent-green)]",
    },
  };

  const iconMap = {
    preparation: <GraduationCap className="h-6 w-6" />,
    homework: <PencilRuler className="h-6 w-6" />,
    gaps: <BookOpen className="h-6 w-6" />,
    kazakh: <Languages className="h-6 w-6" />,
    english: <Languages className="h-6 w-6" />,
    individual: <UserRoundCheck className="h-6 w-6" />,
  };

  return (
    <section id="programs" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-[#FFF4E8] px-4 py-2 font-display text-sm font-bold text-[var(--color-primary)]">
            Образовательные направления
          </div>
          <h2 className="font-sans text-3xl font-black leading-tight text-[var(--color-ink)] md:text-5xl">
            Программы, которые легко выбрать родителям
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-[var(--color-ink-light)]">
            Чёткая структура занятий, небольшие группы и понятная обратная связь после обучения.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((prog: Program, index) => {
            const styles = themeMap[prog.colorTheme] || themeMap.blue;
            const isHighlight = prog.id === "preparation";

            return (
              <motion.article
                key={prog.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`flex h-full flex-col rounded-[24px] border bg-white p-5 smooth-shadow transition-transform hover:-translate-y-1 ${
                  isHighlight ? "border-[var(--color-primary)]" : "border-[#D8E5F1]"
                }`}
              >
                <div className={`flex min-h-[228px] flex-col rounded-[20px] ${styles.panel} p-5`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}>
                    {iconMap[prog.id as keyof typeof iconMap] || <BookOpen className="h-6 w-6" />}
                  </div>

                  <h3 className="mt-5 min-h-[58px] font-sans text-2xl font-black leading-tight text-[var(--color-ink)]">
                    {prog.name}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-ink-light)]">
                    {prog.subtitle}
                  </p>
                </div>

                <div className="flex flex-1 flex-col px-2 pt-5">
                  <div className="min-h-[82px] border-b border-[#E1EAF3] pb-5">
                    <div className="font-display text-4xl font-black text-[var(--color-ink)]">
                      {prog.price} ₸
                    </div>
                    <div className="mt-1 text-sm font-bold text-[var(--color-ink-light)]">
                      за {prog.period}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-[#E1EAF3] bg-[#F8FBFE] p-4">
                    <div className="mb-3 text-sm font-black text-[var(--color-ink)]">Что входит</div>
                    <ul className="space-y-3">
                      {prog.benefits.slice(0, 4).map((benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-2 text-sm font-semibold leading-5 text-[var(--color-ink-light)]"
                        >
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${styles.text}`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectProgram(prog.name)}
                    className={`mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full px-5 py-4 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5 ${
                      isHighlight ? "bg-[var(--color-primary)]" : styles.button
                    }`}
                  >
                    Записаться
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
