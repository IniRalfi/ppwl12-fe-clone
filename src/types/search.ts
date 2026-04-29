export type ActivePanel = "location" | "date" | "guests" | null;

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

export interface GuestCount {
  adults: number; // Dewasa 13+
  children: number; // Anak-anak 2-12
  infants: number; // Balita <2
  pets: number; // Hewan peliharaan
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  emoji: string;
}
