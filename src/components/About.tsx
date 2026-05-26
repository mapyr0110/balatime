import { motion } from "motion/react";
import { Heart, Award, Shield, CheckCircle } from "lucide-react";
import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

  const icons = [
    <Heart className="w-6 h-6 text-[var(--color-primary)]" />,
    <Award className="w-6 h-6 text-[var(--color-primary)]" />,
    <Shield className="w-6 h-6 text-[var(--color-accent-green)]" />,
  ];

  const values = t.about.values.map((v, i) => ({ ...v, icon: icons[i] }));

  return (
    <section id="about" className="py-24 bg-white border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-6">
              <span className="font-display text-xs font-bold tracking-wider uppercase">{t.about.badge}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="font-sans text-lg text-[var(--color-ink-light)] leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="font-sans text-lg text-[var(--color-ink-light)] leading-relaxed mb-8">{t.about.p2}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.checks.map((text) => (
                <div key={text} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)] mt-0.5 shrink-0" />
                  <span className="font-display text-sm sm:text-base text-[var(--color-ink)] font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            {values.map((val, idx) => (
              <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                className="bg-[var(--color-bg)] p-6 rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-sm flex flex-col sm:flex-row gap-5 text-left items-start">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(0,0,0,0.05)] flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2">{val.title}</h3>
                  <p className="font-sans text-sm text-[var(--color-ink-light)] leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
