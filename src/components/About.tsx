/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Heart, Award, Shield, CheckCircle } from "lucide-react";
import { TEACHERS } from "../data/websiteData";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-[var(--color-primary)]" />,
      title: "Любовь и уважение",
      description: "Для нас каждый ребёнок — полноценная личность. Мы строим доверительные и уважительные отношения без стресса, криков или оценочного давления."
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--color-accent-blue)]" />,
      title: "Сильная команда",
      description: "Наши педагоги — это профессионалы с высшим образованием (КазНПУ, КазНУ) и сертифицированные Кембриджские специалисты с огромной любовью к детям."
    },
    {
      icon: <Shield className="w-6 h-6 text-[var(--color-accent-green)]" />,
      title: "Прогрессивные методики",
      description: "Мы берём лучшие филологические и практические методики, соединяя их с играми, геймификацией и развитием мягких навыков (soft skills)."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] mb-6">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span className="font-display text-[11px] font-bold tracking-wider uppercase">О нашей школе</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-6 leading-tight">
              Создаем пространство счастливого и легкого обучения
            </h2>
            
            <p className="font-sans text-base text-[var(--color-ink-light)] leading-relaxed mb-6">
              Мы создали <strong className="text-[var(--color-ink)] font-semibold">BALATIME SCHOOL</strong> с одной ключевой мыслью: учёба не должна быть тяжелой обязанностью или источником ночных слез. Для ребёнка познание мира, математики и новых языков — естественный процесс, полный драйва и восторга, если правильно его направить.
            </p>
            
            <p className="font-sans text-base text-[var(--color-ink-light)] leading-relaxed mb-8">
              В нашем центре мы объединили фундаментальные знания, сильную школьную адаптацию и игровой подход, заимствованный у лучших мировых школ. Нам доверяют сотни родителей Алматы, чьи дети теперь с гордостью несут домой отличные оценки.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)] mt-0.5 shrink-0" />
                <span className="font-display text-xs sm:text-sm text-[var(--color-ink)] font-semibold">Индивидуальные траектории развития</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)] mt-0.5 shrink-0" />
                <span className="font-display text-xs sm:text-sm text-[var(--color-ink)] font-semibold">Англоязычная среда каждый день</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)] mt-0.5 shrink-0" />
                <span className="font-display text-xs sm:text-sm text-[var(--color-ink)] font-semibold">Полный разбор школьных домашних дел</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)] mt-0.5 shrink-0" />
                <span className="font-display text-xs sm:text-sm text-[var(--color-ink)] font-semibold">Современные безопасные залы</span>
              </div>
            </div>
          </div>

          {/* Core Values visual */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--color-bg)] p-6 rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-sm flex flex-col sm:flex-row gap-5 text-left items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[rgba(0,0,0,0.05)] flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-base font-bold text-[var(--color-ink)] mb-2">{val.title}</h3>
                  <p className="font-sans text-xs text-[var(--color-ink-light)] leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Teachers Section */}
        <div className="mt-28 border-t border-dashed border-[rgba(0,0,0,0.06)] pt-24 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">Наши Наставники</span>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            Педагоги, которые вдохновляют
          </h3>
          
          <p className="font-sans text-base text-[var(--color-ink-light)] max-w-2xl mx-auto mb-16">
            За каждым большим результатом стоит увлечённый наставник. Наши преподаватели умеют находить подход к каждому характеру и превращают сложные предметы в весёлое приключение.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TEACHERS.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg)] rounded-3xl overflow-hidden border border-[rgba(0,0,0,0.05)] shadow-md flex flex-col group h-full"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] bg-white overflow-hidden">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm py-1 px-3 rounded-full border border-[rgba(0,0,0,0.04)]">
                    <span className="font-display text-[11px] font-bold text-[var(--color-primary)]">{teacher.experience}</span>
                  </div>
                </div>

                {/* Info details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-display text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                    {teacher.name}
                  </h4>
                  <span className="font-sans text-[10px] sm:text-xs font-semibold text-[var(--color-accent-blue)] uppercase tracking-wider mb-4">
                    {teacher.role}
                  </span>
                  
                  <div className="border-t border-[rgba(0,0,0,0.04)] pt-4 mt-auto">
                    <p className="font-sans text-[11px] text-[var(--color-ink-light)] italic mb-3">
                      🎓 {teacher.education}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-light)] leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
