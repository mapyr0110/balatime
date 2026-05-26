/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  period: string; // "месяц", "занятие", etc.
  frequency: string; // e.g., "5 дней в неделю", "3 раза в неделю"
  options?: { label: string; price: string }[]; // Any additional pricing models
  discountBanner?: string; // e.g., "5 000 ₸ дешевле на ~15%"
  benefits: string[];
  bonuses: string[]; // e.g., "Бесплатный чай и печенье", "Рабочая тетрадь в подарок"
  colorTheme: "orange" | "green";
}

export interface Review {
  id: string;
  parentName: string;
  childNameAndAge: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "все" | "классы" | "процесс" | "праздники";
  imageUrl: string;
  description: string;
}
