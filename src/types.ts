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
  badge?: "ХИТ" | "SALE" | "АКЦИЯ" | "НОВИНКА" | "ПОПУЛЯРНО";
  discountBanner?: string; // e.g., "5 000 ₸ дешевле на ~15%"
  benefits: string[];
  bonuses: string[]; // e.g., "Бесплатный чай и печенье", "Рабочая тетрадь в подарок"
  colorTheme: "red" | "blue" | "teal" | "orange" | "green";
}

export interface Review {
  id: string;
  parentName: string;
  childNameAndAge: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  education: string;
  bio: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "все" | "классы" | "процесс" | "праздники";
  imageUrl: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
