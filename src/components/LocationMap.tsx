import { Building2, ExternalLink, MapPin, Navigation } from "lucide-react";
import { useLang } from "../context/LangContext";

const twoGisUrl = "https://2gis.kz/almaty/geo/9430047375191561";

export default function LocationMap() {
  const { t } = useLang();

  return (
    <section id="location" className="py-24 bg-[var(--color-bg)] border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">{t.location.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            {t.location.title}
          </h2>
          <p className="font-sans text-base text-[var(--color-ink-light)]">{t.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-[rgba(0,0,0,0.05)] shadow-sm">
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                {t.location.addressTitle}
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[var(--color-ink)] leading-snug">{t.location.address}</p>
                    <p className="font-sans text-xs text-[var(--color-ink-light)] mt-1">{t.location.office}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-[rgba(0,0,0,0.05)] pt-5 mt-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-green)]/10 flex items-center justify-center text-[var(--color-accent-green)] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase text-[var(--color-ink-light)] block">{t.location.landmark}</span>
                    <p className="font-sans text-xs text-[var(--color-ink-light)] leading-snug">{t.location.landmarkText}</p>
                  </div>
                </div>

                <a href={twoGisUrl} target="_blank" rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                  {t.location.openMap}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[32px] p-4 border border-[rgba(0,0,0,0.05)] shadow-md h-[400px] lg:h-auto min-h-[400px] overflow-hidden flex">
            <img
              src="src\assets\images\karta.jpg"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "24px" }}
              // allowFullScreen={true}
              loading="lazy"
              title="BALATIME SCHOOL Яндекс Карты"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
