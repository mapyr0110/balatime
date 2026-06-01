import { Building2, ExternalLink, MapPin, Navigation } from "lucide-react";
import { useLang } from "../context/LangContext";

const twoGisUrl = "https://2gis.kz/almaty/geo/9430047375191561";

export default function LocationMap() {
  const { t } = useLang();

  return (
    <section id="location" className="py-24 bg-[var(--color-bg)] border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <span>{t.location.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            {t.location.title}
          </h2>
          <p className="font-sans text-base text-[var(--color-ink-light)]">{t.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center text-left gap-8">
            <div className="p-0">
              <h3 className="font-display text-3xl font-black text-[var(--color-ink)] mb-8 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
                  <MapPin className="w-7 h-7 text-white" />
                </span>
                {t.location.addressTitle}
              </h3>
              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-sans text-lg font-black text-[var(--color-ink)] leading-snug">{t.location.address}</p>
                    <p className="font-sans text-base font-bold text-[var(--color-ink-light)] mt-2">{t.location.office}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-green)] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-black uppercase tracking-wide text-[var(--color-ink-light)] block">{t.location.landmark}</span>
                    <p className="font-sans text-base font-semibold text-[var(--color-ink-light)] leading-snug mt-1">{t.location.landmarkText}</p>
                  </div>
                </div>

                <a href={twoGisUrl} target="_blank" rel="noreferrer"
                  className="inline-flex min-h-16 w-full sm:w-fit items-center justify-center gap-3 rounded-[20px] bg-[var(--color-primary)] px-8 py-5 font-display text-lg font-black text-white transition-transform hover:-translate-y-0.5">
                  {t.location.openMap}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[32px] p-4 border border-[rgba(0,0,0,0.05)] shadow-md h-[400px] lg:h-auto min-h-[400px] overflow-hidden flex">
            <iframe
              src="https://yandex.kz/map-widget/v1/?ll=76.911958%2C43.338014&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzMzMzgyOBKNAdKa0LDQt9Cg0LvQvNCw0YLRiywg0JDQu9C80LDRgtGLLCDQkNC70LDRgtCw0YMg0LDRg9C00LDQvdGLLCDSmtCw0YDQsNGB0YMg0YjQsNKT0YvQvSDQsNGD0LTQsNC90YssINCm0LXQvdGC0YDQsNC70YzQvdCw0Y8g0LrTqdGI0LXRgdGWLCAxNjXQkCIKDezSmUIVIFotQg%2C%2C&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen={true}
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
