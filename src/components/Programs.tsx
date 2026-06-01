import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { PROGRAMS } from "../data/websiteData";
import { Program } from "../types";
import { useLang } from "../context/LangContext";

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

const priceToNumber = (price: string) => Number(price.replace(/\D/g, ""));

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const { t } = useLang();

  const saleOldPrices: Partial<Record<Program["id"], string>> = {
    gaps: "30 000", homework: "35 000", preparation: "42 000",
  };

  const sortedPrograms = [...PROGRAMS].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));

  return (
    <section id="programs" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-badge mb-4">
            {t.programs.badge}
          </div>
          <h2 className="font-sans text-3xl font-black leading-tight text-[var(--color-ink)] md:text-5xl">
            {t.programs.title}
          </h2>
        </div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: [0, 1, 1, 0], x: [0, 12, 0, 18] }}
            transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }}
            className="pointer-events-none absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-[0_12px_30px_rgba(244,147,66,0.3)]"
          >
            <ArrowRight className="h-6 w-6" />
          </motion.div>

          <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory items-stretch gap-6">
            {sortedPrograms.map((prog: Program, index) => {
              const programText = t.programs.items[prog.id as keyof typeof t.programs.items];
              const isGreen = index % 2 === 0;
              const panelClass = isGreen ? "bg-[var(--color-accent-green)]" : "bg-[var(--color-primary)]";
              const accentText = isGreen ? "text-[var(--color-accent-green)]" : "text-[var(--color-primary)]";
              const oldPrice = saleOldPrices[prog.id];

              return (
                <motion.article key={prog.id}
                  initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex min-h-[540px] w-[84vw] max-w-[380px] shrink-0 snap-start flex-col rounded-[24px] border border-[rgba(40,183,164,0.22)] bg-white p-5 smooth-shadow transition-transform hover:-translate-y-1">
                  <div className={`flex min-h-[150px] flex-col items-center justify-center rounded-[20px] ${panelClass} p-5 text-center`}>
                    <h3 className="font-sans text-2xl font-black leading-tight text-white">{programText.name}</h3>
                  </div>

                  <div className="flex flex-1 flex-col px-2 pt-5">
                    <div className="min-h-[104px] border-b border-[rgba(40,183,164,0.18)] pb-5">
                      {oldPrice && (
                        <div className="mb-2 inline-flex rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-black text-white">
                          {t.programs.sale}
                        </div>
                      )}
                      {oldPrice ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-xs font-black uppercase text-[var(--color-ink-light)]">{t.programs.was}</div>
                            <div className="mt-1 text-lg font-black text-[var(--color-ink-light)] line-through">{oldPrice} ₸</div>
                          </div>
                          <div>
                            <div className="text-xs font-black uppercase text-[var(--color-ink-light)]">{t.programs.became}</div>
                            <div className="mt-1 text-3xl font-black text-[var(--color-ink)]">{prog.price} ₸</div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="font-display text-4xl font-black text-[var(--color-ink)]">{prog.price} ₸</div>
                          <div className="mt-1 text-sm font-bold text-[var(--color-ink-light)]">{t.programs.per} {programText.period}</div>
                        </>
                      )}
                    </div>

                    <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-[rgba(40,183,164,0.18)] bg-[var(--color-accent-green)]/5 p-4">
                      <div className="mb-3 text-sm font-black text-[var(--color-ink)]">{t.programs.includes}</div>
                      <ul className="space-y-3">
                        {programText.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2 text-sm font-semibold leading-5 text-[var(--color-ink-light)]">
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accentText}`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button onClick={() => onSelectProgram(programText.name)}
                      className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent-green)] px-5 py-4 font-display text-base font-extrabold text-white transition-transform hover:-translate-y-0.5">
                      {t.programs.enroll}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
