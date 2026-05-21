/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, MessageSquare, HelpCircle, ChevronDown, Award } from "lucide-react";
import { FAQS } from "../data/websiteData";

interface LeadFormProps {
  selectedProgram: string;
}

interface SavedApplication {
  id: string;
  name: string;
  age: string;
  phone: string;
  program: string;
  status: string;
  timestamp: string;
}

export default function LeadForm({ selectedProgram }: LeadFormProps) {
  // Form input states
  const [formData, setFormData] = useState({
    parentName: "",
    childAge: "",
    phone: "+7 ",
    programName: ""
  });

  // Local storage submission list to showcase full-stack-like features pragmatically
  const [savedSubmissions, setSavedSubmissions] = useState<SavedApplication[]>([]);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync selectedProgram value from pricing section click
  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, programName: selectedProgram }));
      // Scroll to form smoothly
      const formElement = document.querySelector("#form-order");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedProgram]);

  // Load saved local submissions on startup
  useEffect(() => {
    const historical = localStorage.getItem("woset_leads");
    if (historical) {
      try {
        setSavedSubmissions(JSON.parse(historical));
      } catch (err) {
        console.error("Failed to parse submissions database table from localStorage", err);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleFAQ = (idx: number) => {
    setOpenFAQIndex(openFAQIndex === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check basic length requirements
    if (!formData.parentName || !formData.phone || formData.phone.length < 8) {
      alert("Пожалуйста, заполните Имя и верный Номер телефона!");
      return;
    }

    // Save to localStorage list
    const newLead: SavedApplication = {
      id: Math.random().toString(36).substring(2, 9),
      name: formData.parentName,
      age: formData.childAge || "Не указан",
      phone: formData.phone,
      program: formData.programName || "Консультация",
      status: "Новая заявка",
      timestamp: new Date().toLocaleDateString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const updated = [newLead, ...savedSubmissions];
    setSavedSubmissions(updated);
    localStorage.setItem("woset_leads", JSON.stringify(updated));

    // Construct WhatsApp message template link
    const waText = `Здравствуйте, BALATIME SCHOOL! Хочу записать ребенка на пробный урок.\n\n` + 
      `• Имя родителя: ${formData.parentName}\n` +
      `• Возраст ребенка: ${formData.childAge || "Не указано"} лет\n` +
      `• Контактный телефон: ${formData.phone}\n` +
      `• Выбранный курс: ${formData.programName || "Общая консультация"}`;
    
    const waUrl = `https://wa.me/77471581493?text=${encodeURIComponent(waText)}`;

    // Set success indicator
    setIsSuccess(true);

    // Open WhatsApp link in new window gracefully
    window.open(waUrl, "_blank");

    // Clear main inputs but retain default text templates
    setTimeout(() => {
      setFormData({
        parentName: "",
        childAge: "",
        phone: "+7 ",
        programName: ""
      });
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="form-order" className="py-24 bg-[var(--color-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: FAQ Accordion block */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)] mb-6 self-start">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="font-display text-[11px] font-bold tracking-wider uppercase">Вопросы & Ответы</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] font-bold tracking-tight mb-8">
              Часто задаваемые вопросы
            </h2>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFAQIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => handleToggleFAQ(idx)}
                      className="w-full p-5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-[var(--color-ink)] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--color-ink-light)] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-[var(--color-ink-light)] leading-relaxed border-t border-dashed border-[rgba(0,0,0,0.04)]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 p-5 rounded-2xl flex items-start gap-3 mt-8">
              <Award className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-[var(--color-ink)] leading-relaxed">
                <strong>Кампус мечты:</strong> Все группы проходят комплексное сопровождение. Мы также регулярно созваниваемся с вами и даем обратную связь по успехам ребенка, отвечая на любые вопросы в индивидуальном порядке.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Registration Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[28px] p-8 md:p-12 border border-[#D8E5F1] smooth-shadow text-left relative">
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2 leading-tight">
                Запишитесь на бесплатный пробный урок
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-light)] mb-8 leading-relaxed">
                Заполните простую форму ниже, чтобы забронировать место. Наш приветливый администратор свяжется с вами, чтобы обсудить детальные пожелания!
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="parentName" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    placeholder="Например, Алия"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Child age */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="childAge" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                      Возраст ребенка (лет)
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      min="3"
                      max="17"
                      placeholder="Например, 6"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+7 747 158 14 93"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Program Category List */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="programName" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                    Учебная программа / Вопрос по обучению
                  </label>
                  <select
                    id="programName"
                    name="programName"
                    value={formData.programName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">-- Общая консультация и подбор курса --</option>
                    <option value="Подготовка к школе">Подготовка к школе</option>
                    <option value="Домашняя работа (1-4 классы)">Домашняя работа (1-4 классы)</option>
                    <option value="Работа с пробелами (1-4 класс)">Работа с пробелами (1-4 класс)</option>
                    <option value="Казахский язык с нуля">Казахский язык с нуля</option>
                    <option value="General English (в группах)">General English (в группах)</option>
                    <option value="Индивидуальные занятия">Индивидуальные занятия</option>
                  </select>
                </div>

                {/* Success Indicator Badge */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <p className="font-sans text-[12px] text-emerald-800 font-medium">
                        Ура! Заявка отправлена. Открывается окно чата в WhatsApp. Наш администратор уже ответит вам!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submits buttons */}
                <button
                  type="submit"
                  className="w-full min-h-14 py-3.5 bg-[var(--color-primary)] hover:bg-[#D97924] text-white font-display font-bold text-sm rounded-full transition-transform duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Отправить в WhatsApp</span>
                </button>

                <p className="font-sans text-[10px] text-center text-[var(--color-ink-light)] mt-1 leading-normal">
                  * Нажимая на кнопку, вы соглашаетесь на обработку персональных данных. Администратор ответит в течение 10 минут в рабочее время.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
