export interface Experience {
  id: number;
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
  rating: number;
  price: string;
  isFavorite?: boolean;
}

// Tipe baru: 1 kota = 1 section
export interface CitySection {
  city: string;   // nama kota untuk judul section
  data: Experience[]; // 8 card per kota
}