import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Star, UsersRound } from "lucide-react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (!target) return;
    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const trustItems = [
    { icon: <Star className="h-5 w-5" />, ...t.hero.trust.rating },
    { icon: <UsersRound className="h-5 w-5" />, ...t.hero.trust.age },
    { icon: <ShieldCheck className="h-5 w-5" />, ...t.hero.trust.group },
  ];

  return (
    <section id="hero" className="bg-[var(--color-bg)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto max-w-4xl font-sans text-4xl font-black leading-[1.05] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            <span className="text-[var(--color-primary)]">{t.hero.titleBrand}</span>{" "}
            <span>{t.hero.titleRest}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-[var(--color-ink-light)]">
            {t.hero.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={() => handleScrollToSection("#form-order")}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-4 font-display text-base font-bold text-white shadow-[0_12px_28px_rgba(244,147,66,0.22)] transition-transform hover:-translate-y-0.5">
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </button>
            <button onClick={() => handleScrollToSection("#programs")}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-4 font-display text-base font-bold text-white shadow-[0_12px_28px_rgba(244,147,66,0.18)] transition-transform hover:-translate-y-0.5">
              {t.hero.viewPrograms}
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[rgba(40,183,164,0.22)] bg-white p-4 text-left">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]">
                  {item.icon}
                </div>
                <div className="font-display text-lg font-black text-[var(--color-ink)]">{item.value}</div>
                <div className="mt-1 text-sm font-semibold text-[var(--color-ink-light)]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
