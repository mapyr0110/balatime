/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";
import { CONTACT_INFO, CLASSROOM_INTERIOR } from "../data/websiteData";

export default function LocationMap() {
  return (
    <section id="location" className="py-24 bg-[var(--color-bg)] border-t border-b border-[rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] mb-4">
            <span className="font-display text-[11px] font-bold tracking-wider uppercase">Где мы находимся</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-ink)] font-bold tracking-tight mb-4">
            Удобная Локация в Алматы
          </h2>
          
          <p className="font-sans text-base text-[var(--color-ink-light)]">
            Наш центр расположен в тихом, новом и безопасном жилом комплексе в Бостандыкском районе с отличным доступом из любой точки города.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Location info and Classroom slide card */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-[rgba(0,0,0,0.05)] shadow-sm">
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                Наш адрес
              </h3>

              <div className="flex flex-col gap-5">
                {/* Real physical address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[var(--color-ink)] leading-snug">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="font-sans text-xs text-[var(--color-ink-light)] mt-1">
                      {CONTACT_INFO.landmark}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-blue)]/10 flex items-center justify-center text-[var(--color-accent-blue)] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase text-[var(--color-ink-light)] block">Часы работы:</span>
                    <strong className="font-display text-sm text-[var(--color-ink)]">
                      {CONTACT_INFO.workingHours}
                    </strong>
                  </div>
                </div>

                {/* Security details details */}
                <div className="flex items-start gap-3 border-t border-[rgba(0,0,0,0.05)] pt-5 mt-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-green)]/10 flex items-center justify-center text-[var(--color-accent-green)] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase text-[var(--color-ink-light)] block">Транспорт и Парковка:</span>
                    <p className="font-sans text-xs text-[var(--color-ink-light)] leading-snug">
                      Удобная зона высадки детей, 30 минут бесплатного паркинга для гостей центра. Закрытая охраняемая территория без посторонних машин.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Classroom Image Display */}
            <div className="relative group rounded-[32px] overflow-hidden border border-[rgba(0,0,0,0.05)] shadow-md flex-grow min-h-[250px]">
              <img
                src={CLASSROOM_INTERIOR}
                alt="Наш яркий учебный класс BALATIME SCHOOL в Алматы"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="bg-white text-[var(--color-accent-blue)] font-display text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full">
                  Реальный интерьер
                </span>
                <p className="font-display text-base font-bold text-white mt-2">
                  Просторный и светлый класс с панорамными окнами
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Iframe - high quality visual Yandex Embed centered in Gagarin Avenue, Almaty */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-4 border border-[rgba(0,0,0,0.05)] shadow-md h-[400px] lg:h-auto min-h-[400px] overflow-hidden flex">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=76.899380%2C43.218552&mode=search&oid=165842861201&ol=biz&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="BALATIME SCHOOL Yandex Map Almaty"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
