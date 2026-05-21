/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Gift, Sparkles } from "lucide-react";
import { PROGRAMS } from "../data/websiteData";
import { Program } from "../types";

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  
  // Theme styling mapping based on colorTheme property of the card
  const themeMap = {
    red: {
      bg: "bg-[#FFF5F5]",
      border: "border-[var(--color-accent-red)]",
      headerBg: "bg-[var(--color-accent-red)]",
      textAccent: "text-[var(--color-accent-red)]",
      btnBg: "bg-[var(--color-accent-red)] hover:bg-[#E04B4B] text-white",
      badgeBg: "bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)]"
    },
    blue: {
      bg: "bg-[#F4FAFF]",
      border: "border-[var(--color-accent-blue)]",
      headerBg: "bg-[var(--color-accent-blue)]",
      textAccent: "text-[var(--color-accent-blue)]",
      btnBg: "bg-[var(--color-accent-blue)] hover:bg-[#4E9ADC] text-white",
      badgeBg: "bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
    },
    teal: {
      bg: "bg-[#FAF7F2]",
      border: "border-[var(--color-primary)]",
      headerBg: "bg-[var(--color-primary)]",
      textAccent: "text-[var(--color-primary)]",
      btnBg: "bg-[var(--color-primary)] hover:bg-[#D97924] text-white",
      badgeBg: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
    },
    orange: {
      bg: "bg-[#FFFBF5]",
      border: "border-[var(--color-primary)]",
      headerBg: "bg-[var(--color-primary)]",
      textAccent: "text-[var(--color-primary)]",
      btnBg: "bg-[var(--color-primary)] hover:bg-[#D97924] text-white",
      badgeBg: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
    },
    green: {
      bg: "bg-[#F7FCF8]",
      border: "border-[var(--color-accent-green)]",
      headerBg: "bg-[var(--color-accent-green)]",
      textAccent: "text-[var(--color-accent-green)]",
      btnBg: "bg-[var(--color-accent-green)] hover:bg-[#6FA059] text-white",
      badgeBg: "bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]"
    }
  };

  const handleChooseProgram = (programName: string) => {
    onSelectProgram(programName);
  };

  return (
    <section id="programs" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">Программы обучения</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-6 animate-pulse">
            Наши Учебные Направления
          </h2>
          
          <p className="font-sans text-base text-[var(--color-ink-light)] leading-relaxed">
            Выберите оптимальную траекторию развития для вашего ребёнка. Цены прозрачны, а уютная атмосфера и заботливые бонусы уже включены в стоимость!
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS.map((prog: Program, index) => {
            const styles = themeMap[prog.colorTheme] || themeMap.blue;
            const isHighlight = prog.id === "preparation"; // School prep is the focus promotion (HIT)

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between bg-white rounded-[32px] border transition-all duration-300 h-full overflow-hidden ${
                  isHighlight 
                    ? `border-[var(--color-primary)] shadow-xl shadow-[rgba(242,143,59,0.15)] ring-4 ring-[var(--color-primary)]/10` 
                    : "border-[rgba(0,0,0,0.05)] shadow-sm hover:border-[rgba(0,0,0,0.12)]"
                }`}
              >
                
                {/* Visual Accent Top Bar */}
                <div className={`h-4 w-full ${styles.headerBg}`} />

                {/* Main Content Info */}
                <div className="p-8 flex-grow">
                  {/* Badge & Program Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-display text-[10px] font-semibold text-[var(--color-ink-light)] block uppercase tracking-wide">
                      {prog.id === "kazakh" || prog.id === "individual" ? "Индивидуально" : "В учебных группах"}
                    </span>
                    {prog.badge && (
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-display ${styles.badgeBg} animate-pulse`}>
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[var(--color-ink)] mb-2 text-left">
                    {prog.name}
                  </h3>
                  
                  <p className="font-sans text-xs text-[var(--color-ink-light)] text-left leading-relaxed min-h-[36px] mb-6 border-b border-[rgba(0,0,0,0.04)] pb-4">
                    {prog.subtitle}
                  </p>

                  {/* Pricing Block */}
                  <div className="flex flex-col text-left mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-[var(--color-ink)] tracking-tight">
                        {prog.price} ₸
                      </span>
                      <span className="font-sans text-xs font-semibold text-[var(--color-ink-light)]">
                        / {prog.period}
                      </span>
                    </div>

                    {/* Old Price block if available */}
                    {prog.oldPrice ? (
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[var(--color-ink-light)]">
                        <span>Старая цена:</span>
                        <span className="line-through text-[var(--color-accent-red)] font-bold">{prog.oldPrice} ₸</span>
                      </div>
                    ) : (
                      <div className="h-4" /> // Spacing placeholder
                    )}
                  </div>

                  {/* High Conversion Green Banner (FOMO) */}
                  <div className="bg-[var(--color-accent-green)]/10 border border-[var(--color-accent-green)]/20 rounded-2xl p-3 mb-6 flex items-center gap-2.5 text-left">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent-green)] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3px]" />
                    </div>
                    <span className="font-sans text-[11px] font-bold text-[var(--color-accent-green)]">
                      {prog.discountBanner}
                    </span>
                  </div>

                  <p className="font-display text-[10px] font-bold text-[var(--color-ink)] uppercase tracking-wider mb-3 text-left">
                    Частота занятий: {prog.frequency}
                  </p>

                  {/* Options alternative packages (if any) */}
                  {prog.options && (
                    <div className="bg-[var(--color-bg)]/80 p-3 rounded-2xl border border-[rgba(0,0,0,0.05)] mb-6 flex flex-col gap-1.5 text-left text-xs">
                      <span className="font-semibold text-[var(--color-ink-light)] text-[11px]">Альтернативный формат:</span>
                      {prog.options.map((option, oIdx) => (
                        <div key={oIdx} className="flex justify-between items-center text-[var(--color-ink)] text-[11px]">
                          <span>• {option.label}</span>
                          <span className="font-bold">{option.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Benefits Checkmarks */}
                  <ul className="flex flex-col gap-3 text-left border-t border-[rgba(0,0,0,0.04)] pt-6">
                    {prog.benefits.slice(0, 5).map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full ${styles.badgeBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${styles.textAccent} stroke-[3px]`} />
                        </div>
                        <span className="font-sans text-xs text-[var(--color-ink-light)] leading-tight">
                          {ben}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Bonuses & Interactive Action */}
                <div className="px-8 pb-8 pt-4 bg-[var(--color-bg)] rounded-b-[30px] border-t border-[rgba(0,0,0,0.04)] text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className={`w-4 h-4 ${styles.textAccent}`} />
                    <span className="font-display text-[10px] font-bold text-[var(--color-ink)] uppercase tracking-wide">
                      Вежливые бонусы BALATIME:
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {prog.bonuses.map((bonus, boIdx) => (
                      <li key={boIdx} className="font-sans text-[11px] text-[var(--color-ink-light)] flex items-center gap-1.5">
                        <span>• {bonus}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight-specific button / standard action */}
                  <button
                    onClick={() => handleChooseProgram(prog.name)}
                    className={`w-full py-3 rounded-full font-display font-bold text-xs tracking-wider transition-all duration-300 hover:scale-[1.01] active:translate-y-0.5 cursor-pointer text-center text-white uppercase ${
                      isHighlight
                        ? "bg-[var(--color-primary)] hover:bg-[#D97924] shadow-lg shadow-[rgba(242,143,59,0.3)]"
                        : "bg-[var(--color-accent-blue)] hover:bg-[#4E9ADC] shadow-sm"
                    }`}
                  >
                    Записаться звонок
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Small conversion booster text below the grid */}
        <div className="mt-12 text-center text-xs font-semibold text-[var(--color-ink-light)]">
          * Все учебные материалы, рабочие тетради, карандаши и перекусы входят в стоимость. Никаких隠 скрытых комиссий!
        </div>

      </div>
    </section>
  );
}
