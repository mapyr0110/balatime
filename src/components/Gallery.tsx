import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon } from "lucide-react";
import { GALLERY } from "../data/websiteData";
import { useLang } from "../context/LangContext";

type CategoryType = "все" | "классы" | "процесс" | "праздники";

export default function Gallery() {
  const { lang, t } = useLang();
  const [activeCategory] = useState<CategoryType>("все");

  const filteredItems = GALLERY.filter(
    (item) => activeCategory === "все" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[var(--color-bg)] border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">{t.gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="font-sans text-base text-[var(--color-ink-light)]">{t.gallery.subtitle}</p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const translatedItem = t.gallery.items[item.id as keyof typeof t.gallery.items];
              const title = lang === "RU" ? item.title : translatedItem?.title || item.title;
              const description = lang === "RU" ? item.description : translatedItem?.description || item.description;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.05)] bg-white aspect-[4/3] shadow-sm cursor-zoom-in"
                >
                  <img
                    src={item.imageUrl}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                    <div className="flex items-center gap-2 mb-2 text-[var(--color-accent-green)]">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-white font-bold text-base leading-snug">{title}</h4>
                    <p className="font-sans text-white/80 text-[11px] leading-relaxed mt-1.5">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
