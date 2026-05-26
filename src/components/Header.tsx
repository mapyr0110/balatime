import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarCheck, ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Lang } from "../data/translations";
import logoIcon from "../assets/images/icon.png";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  const languages: { code: Lang; label: string }[] = [
    { code: "RU", label: "Русский" },
    { code: "KZ", label: "Қазақша" },
    { code: "EN", label: "English" },
  ];

  const handleLanguageSelect = (code: Lang) => {
    setLang(code);
    setIsLanguageOpen(false);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 92;
    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="section-shell">
          <div className={`flex min-h-[68px] items-center justify-between rounded-[28px] border px-4 transition-all duration-300 md:px-5 ${
            isScrolled
              ? "border-[rgba(40,183,164,0.22)] bg-white shadow-[0_14px_40px_rgba(32,48,42,0.10)]"
              : "border-white/80 bg-white/95 shadow-[0_10px_30px_rgba(32,48,42,0.06)]"
          }`}>
            <a href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="flex items-center gap-3">
              <img
                src={logoIcon}
                alt="BALATIME SCHOOL"
                className="h-16 w-16 rounded-2xl object-cover"
              />
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => handleScrollTo(e, item.href)}
                  className="rounded-full px-4 py-3 font-sans text-sm font-extrabold text-[var(--color-ink-light)] transition-colors hover:bg-[var(--color-accent-green)]/10 hover:text-[var(--color-ink)]">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#form-order" onClick={(e) => handleScrollTo(e, "#form-order")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 font-display text-sm font-bold text-white shadow-[0_10px_24px_rgba(244,147,66,0.26)] transition-transform hover:-translate-y-0.5">
                <CalendarCheck className="h-5 w-5" />
                {t.nav.trialLesson}
              </a>

              <div className="relative">
                <button type="button" onClick={() => setIsLanguageOpen((v) => !v)}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[rgba(40,183,164,0.22)] bg-[var(--color-accent-green)]/10 px-4 py-3 font-display text-sm font-extrabold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-accent-green)]/15"
                  aria-haspopup="menu" aria-expanded={isLanguageOpen}>
                  <Globe2 className="h-5 w-5 text-[var(--color-accent-green)]" />
                  {lang}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }}
                      className="absolute right-0 top-[calc(100%+8px)] z-50 w-40 rounded-2xl border border-[rgba(40,183,164,0.22)] bg-white p-2 shadow-[0_18px_45px_rgba(32,48,42,0.12)]"
                      role="menu">
                      {languages.map((language) => (
                        <button key={language.code} type="button" onClick={() => handleLanguageSelect(language.code)}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-display text-sm font-bold transition-colors ${
                            lang === language.code
                              ? "bg-[var(--color-accent-green)] text-white"
                              : "text-[var(--color-ink)] hover:bg-[var(--color-accent-green)]/10"
                          }`} role="menuitem">
                          <span>{language.label}</span>
                          <span className="text-xs">{language.code}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-green)]/10 text-[var(--color-ink)] md:hidden"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[92px] z-40 px-4 md:hidden">
            <nav className="mx-auto flex max-w-xl flex-col gap-2 rounded-[28px] border border-[rgba(40,183,164,0.22)] bg-white p-4 shadow-[0_18px_45px_rgba(32,48,42,0.12)]">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => handleScrollTo(e, item.href)}
                  className="rounded-2xl px-4 py-3 font-sans text-base font-extrabold text-[var(--color-ink)] hover:bg-[var(--color-accent-green)]/10">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-3 gap-2">
                {languages.map((language) => (
                  <button key={language.code} type="button" onClick={() => handleLanguageSelect(language.code)}
                    className={`min-h-11 rounded-2xl px-3 font-display text-sm font-extrabold transition-colors ${
                      lang === language.code
                        ? "bg-[var(--color-accent-green)] text-white"
                        : "bg-[var(--color-accent-green)]/10 text-[var(--color-ink)]"
                    }`}>
                    {language.code}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
