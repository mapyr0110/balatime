import React from "react";
import { Phone, MapPin, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../data/websiteData";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLang } from "../context/LangContext";
import logoIcon from "../assets/images/icon.png";
import amorIcon from "../assets/images/amor.png";

export default function Footer() {
  const { t } = useLang();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5 text-white" />, href: CONTACT_INFO.instagram, label: "Instagram" },
    { icon: <WhatsAppIcon className="w-5 h-5" />, href: CONTACT_INFO.whatsapp, label: "WhatsApp" },
  ];

  const navLinks = [
    { label: t.footer.navLinks[0], href: "#hero" },
    { label: t.footer.navLinks[1], href: "#about" },
    { label: t.footer.navLinks[2], href: "#programs" },
    { label: t.footer.navLinks[3], href: "#location" },
  ];

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacts" className="relative bg-[#173A31] text-white/65 pt-20 pb-12 border-t border-[rgba(255,255,255,0.06)] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(255,255,255,0.06)]">

          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#hero" onClick={handleScrollToTop} className="flex items-center gap-2 group">
              <img
                src={logoIcon}
                alt="BALATIME SCHOOL"
                className="h-16 w-16 rounded-2xl object-cover"
              />
            </a>
            <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed max-w-sm mt-2">
              {t.footer.description}
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 flex items-center justify-center text-[var(--color-accent-green)] shadow-sm cursor-pointer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-6">
              {t.footer.navTitle}
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={link.href === "#hero" ? handleScrollToTop : undefined}
                    className="hover:text-white hover:underline decoration-[var(--color-primary)] transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 text-left flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.contactsTitle}
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <p className="font-sans text-xs sm:text-sm text-white/85 leading-snug">{t.location.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-sans text-xs sm:text-sm text-white/85">
                {CONTACT_INFO.phones.map((p, i) => (
                  <a key={i} href={`tel:${p.replace(/\D/g, "")}`}
                    className="hover:text-[var(--color-primary)] transition-colors font-semibold">{p}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-4 font-sans text-xs text-white/50 md:grid-cols-[1fr_auto_1fr]">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} BALATIME SCHOOL. {t.footer.rights}</p>
          <a
            href="https://amorix.kz"
            className="footer-powered justify-self-center"
            target="_blank"
            rel="noopener"
          >
            <span>Powered by</span>
            <img src={amorIcon} alt="Amorix" />
          </a>
          <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right lg:flex-row lg:justify-end lg:gap-6">
            <span>* BALATIME SCHOOL</span>
            <span>{t.footer.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
