import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLang } from "../context/LangContext";

interface LeadFormProps {
  selectedProgram: string;
}

interface SavedApplication {
  id: string; name: string; age: string; phone: string;
  program: string; status: string; timestamp: string;
}

export default function LeadForm({ selectedProgram }: LeadFormProps) {
  const { t } = useLang();
  const programOptions = [
    { id: "preparation", label: t.form.programOptions.preparation },
    { id: "homework", label: t.form.programOptions.homework },
    { id: "gaps", label: t.form.programOptions.gaps },
    { id: "kazakh", label: t.form.programOptions.kazakh },
    { id: "english", label: t.form.programOptions.english },
    { id: "individual", label: t.form.programOptions.individual },
  ];
  const [formData, setFormData] = useState({ parentName: "", childAge: "", phone: "+7 ", programName: "" });
  const [savedSubmissions, setSavedSubmissions] = useState<SavedApplication[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, programName: selectedProgram }));
      document.querySelector("#form-order")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedProgram]);

  useEffect(() => {
    const historical = localStorage.getItem("woset_leads");
    if (historical) {
      try { setSavedSubmissions(JSON.parse(historical)); } catch (err) { console.error(err); }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || formData.phone.length < 8) {
      alert(t.form.alertMsg);
      return;
    }
    const newLead: SavedApplication = {
      id: Math.random().toString(36).substring(2, 9),
      name: formData.parentName, age: formData.childAge || t.form.notSpecified,
      phone: formData.phone, program: formData.programName || t.form.consultation,
      status: t.form.leadStatus,
      timestamp: new Date().toLocaleDateString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
    };
    const updated = [newLead, ...savedSubmissions];
    setSavedSubmissions(updated);
    localStorage.setItem("woset_leads", JSON.stringify(updated));

    const waText = `${t.form.waGreeting}\n\n` +
      `• ${t.form.waName}: ${formData.parentName}\n` +
      `• ${t.form.waAge}: ${formData.childAge || "—"}\n` +
      `• ${t.form.waPhone}: ${formData.phone}\n` +
      `• ${t.form.waCourse}: ${formData.programName || t.form.consultation}`;
    window.open(`https://wa.me/77471581493?text=${encodeURIComponent(waText)}`, "_blank");
    setIsSuccess(true);
    setTimeout(() => {
      setFormData({ parentName: "", childAge: "", phone: "+7 ", programName: "" });
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="form-order" className="py-24 bg-[var(--color-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white rounded-[28px] p-8 md:p-12 border border-[rgba(40,183,164,0.22)] smooth-shadow text-left relative">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2 leading-tight">
              {t.form.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-light)] mb-8 leading-relaxed">
              {t.form.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="parentName" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                  {t.form.nameLabel}
                </label>
                <input type="text" id="parentName" name="parentName" required
                  placeholder={t.form.namePlaceholder} value={formData.parentName} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="childAge" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                    {t.form.ageLabel}
                  </label>
                  <input type="number" id="childAge" name="childAge" min="3" max="17"
                    placeholder={t.form.agePlaceholder} value={formData.childAge} onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                    {t.form.phoneLabel}
                  </label>
                  <input type="tel" id="phone" name="phone" required
                    placeholder={t.form.phonePlaceholder} value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="programName" className="font-display text-xs font-bold text-[var(--color-ink-light)] uppercase tracking-wide">
                  {t.form.programLabel}
                </label>
                <select id="programName" name="programName" value={formData.programName} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[var(--color-bg)] text-xs sm:text-sm text-[var(--color-ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option value="">{t.form.programDefault}</option>
                  {programOptions.map((option) => (
                    <option key={option.id} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="font-sans text-[12px] text-emerald-800 font-medium">{t.form.successMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button type="submit"
                className="w-full min-h-14 py-3.5 bg-[var(--color-primary)] hover:bg-[#D97924] text-white font-display font-bold text-sm rounded-full transition-transform duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer">
                <WhatsAppIcon className="w-5 h-5 text-[var(--color-accent-green)]" />
                <span>{t.form.submit}</span>
              </button>

              <p className="font-sans text-[10px] text-center text-[var(--color-ink-light)] mt-1 leading-normal">
                {t.form.consent}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
