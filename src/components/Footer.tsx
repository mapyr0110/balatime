/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Phone, Mail, MapPin, Instagram, Clock, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "../data/websiteData";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: CONTACT_INFO.instagram,
      label: "Instagram профиль"
    },
    {
      icon: <MessageSquare className="w-5 h-5 fill-current" />,
      href: CONTACT_INFO.whatsapp,
      label: "WhatsApp чат"
    }
  ];

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contacts" className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-[rgba(255,255,255,0.06)] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main top columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 text-left">
            <a href="#hero" onClick={handleScrollToTop} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-md shadow-[rgba(242,143,59,0.2)]">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-2xl font-bold tracking-tight text-white group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  BALATIME
                </span>
                <span className="font-display text-[10px] font-bold tracking-widest text-[var(--color-accent-blue)] uppercase leading-tight mt-0.5">
                  SCHOOL
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
              Современный детский образовательный центр в Алматы. Мы дарим детям уверенность в завтрашнем дне, высокие оценки и неподдельную радость открытий.
            </p>

            {/* Social media circle buttons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 flex items-center justify-center text-slate-200 shadow-sm cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-6">
              Навигация
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
              <li>
                <a href="#hero" onClick={handleScrollToTop} className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                  Главная страница
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                  О нашей школе
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                  Программы & Цены
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                  Наш адрес и Карта
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                  Отзывы родителей
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 text-left flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-2">
              Контакты центра
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-snug">
                {CONTACT_INFO.address}
              </p>
            </div>

            {/* Telephone dialers */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm text-slate-200">
                {CONTACT_INFO.phones.map((p, pIdx) => (
                  <a key={pIdx} href={`tel:${p.replace(/\D/g, "")}`} className="hover:text-[var(--color-primary)] transition-colors font-semibold">
                    {p}
                  </a>
                ))}
              </div>
            </div>

            {/* Email details */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans text-xs sm:text-sm text-slate-200 hover:text-[var(--color-primary)] transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Working times */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
              <span className="font-sans text-xs sm:text-sm text-slate-400">
                {CONTACT_INFO.workingHours}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom footer copyright details */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 font-sans text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BALATIME SCHOOL Almaty. Все права защищены.</p>
          <div className="flex gap-6">
            <span>* BALATIME SCHOOL</span>
            <span>г. Алматы, Республика Казахстан</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
