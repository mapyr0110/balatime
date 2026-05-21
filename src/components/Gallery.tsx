/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon } from "lucide-react";
import { GALLERY } from "../data/websiteData";

type CategoryType = "все" | "классы" | "процесс" | "праздники";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("все");

  const categories: { label: string; value: CategoryType }[] = [
    { label: "Все фото", value: "все" },
    { label: "Наши классы", value: "классы" },
    { label: "Учебный процесс", value: "процесс" },
    { label: "Праздники & События", value: "праздники" }
  ];

  const filteredItems = GALLERY.filter(
    (item) => activeCategory === "все" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[var(--color-bg)] border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] mb-4">
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">Фотогалерея</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            Жизнь внутри BALATIME SCHOOL
          </h2>
          
          <p className="font-sans text-base text-[var(--color-ink-light)]">
            Яркие эмоции, праздничные дни, новые знакомства и уютные классы. Загляните к нам в гости через объектив фотокамеры!
          </p>
        </div>

        {/* Filter Navigation Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 pointer-events-auto border cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-[var(--color-accent-blue)] text-white border-[var(--color-accent-blue)] shadow-md shadow-[rgba(93,169,233,0.3)]"
                  : "bg-white text-[var(--color-ink-light)] border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.15)] hover:text-[var(--color-ink)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of gallery assets */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
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
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="flex items-center gap-2 mb-2 text-[var(--color-accent-blue)]">
                    <ImageIcon className="w-4 h-4" />
                    <span className="font-display text-[10px] uppercase font-bold tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-display text-white font-bold text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-white/80 text-[11px] leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
