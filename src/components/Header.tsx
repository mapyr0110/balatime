/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookOpenCheck, CalendarCheck, Menu, MessageSquare, X } from "lucide-react";
import { CONTACT_INFO } from "../data/websiteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "#hero" },
    { label: "О школе", href: "#about" },
    { label: "Программы", href: "#programs" },
    { label: "Локация", href: "#location" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contacts" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 92;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="section-shell">
          <div
            className={`flex min-h-[68px] items-center justify-between rounded-[28px] border px-4 transition-all duration-300 md:px-5 ${
              isScrolled
                ? "border-[#D9E5F0] bg-white shadow-[0_14px_40px_rgba(23,50,77,0.10)]"
                : "border-white/80 bg-white/95 shadow-[0_10px_30px_rgba(23,50,77,0.06)]"
            }`}
          >
            <a href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[var(--color-accent-blue)]">
                <BookOpenCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-brand text-[22px] font-bold text-[var(--color-ink)]">
                  BALATIME
                </span>
                <span className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-green)]">
                  SCHOOL
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="rounded-full px-4 py-3 font-sans text-sm font-extrabold text-[var(--color-ink-light)] transition-colors hover:bg-[#F1F6FB] hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#form-order"
                onClick={(e) => handleScrollTo(e, "#form-order")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 font-display text-sm font-bold text-white shadow-[0_10px_24px_rgba(244,147,66,0.26)] transition-transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="h-5 w-5" />
                Пробный урок
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E9FAF7] text-[var(--color-accent-green)] transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F6FB] text-[var(--color-ink)] md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[92px] z-40 px-4 md:hidden"
          >
            <nav className="mx-auto flex max-w-xl flex-col gap-2 rounded-[28px] border border-[#D9E5F0] bg-white p-4 shadow-[0_18px_45px_rgba(23,50,77,0.12)]">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="rounded-2xl px-4 py-3 font-sans text-base font-extrabold text-[var(--color-ink)] hover:bg-[#F1F6FB]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent-green)] px-5 py-3 font-display text-sm font-bold text-white"
              >
                <MessageSquare className="h-5 w-5" />
                Написать в WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
