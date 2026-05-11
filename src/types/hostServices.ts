// src/types/hostServices.ts

export interface ServiceCategory {
  id: string;
  name: string;
  image: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
  mockupAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  sectionTitle: string;
  items: FAQItem[];
}
