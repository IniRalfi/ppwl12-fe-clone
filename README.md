# PPWL 12 - FE - Clone

Kelas Praktikum Pemograman Web Lanjut 2026 (Sistem Informasi/UNTAN). Minggu ke-12.

- Tiap tim diberi beberapa url sub page (Home, Detail, dll.) dari web yang sama.
- Menggunakan React TS & TailwindCSS untuk membuat UI dan interaksi semirip mungkin dengan referensi.

---

## Class A / Team 3

Main Web: https://www.airbnb.co.id/

---

## 👥 Tim & Pembagian Tugas

| Name          | NIM         | Reference Page | Spesific Component                                                              |
| ------------- | ----------- | -------------- | ------------------------------------------------------------------------------- |
| Rafli Pratama | H1101241008 | Home & Detail  | Navbar (Full), Footer (Full), Integration (Page Layout)                         |
| Adella        | H1101241036 | Home           | Reusable Card, Listing Section (Homes, Experiences, Services), Layout & Mapping |
| Bagas         | H110124XXX  | Detail         | Map Section, Host Profile, Extra Info, Nearby Listings                          |
| Yasmin        | H110124XXX  | Detail         | Image Gallery, Gallery Detail View, Sticky Tabs                                 |
| Olivia        | H110124XXX  | Detail         | Host Info, Description, Amenities, BookingCard, DatePicker                      |
| Asa           | H110124XXX  | Detail         | Review Summary, Review List, Review Modal                                       |

---

## 🧩 Pembagian Halaman

### 🏠 Home Page

- Navbar & Footer → Rafli Pratama
- Listing Section (Homes, Experiences, Services) → Adella
- Reusable Card → Adella

---

### 🛏️ Detail Page

- Image Gallery & Sticky Tabs → Yasmin
- Content (Host Info, Description, Amenities) + Booking → Olivia
- Reviews Section → Asa
- Map, Host Profile, Extra Info, Nearby Listings → Bagas
- Navbar & Footer + Integration Layout → Rafli Pratama

---

## 🗂️ Struktur Project

src/
├── components/
│ ├── experiences/
│ ├── listing/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ └── SearchBar/
├── data/
├── hooks/
├── pages/
├── types/

### Penjelasan:

- **components/** → berisi komponen modular (listing, review, booking, dll.)
- **data/** → dummy data untuk development awal
- **hooks/** → custom hook (contoh: scroll detection)
- **pages/** → halaman utama untuk integrasi
- **types/** → definisi TypeScript untuk konsistensi data

---

## ⚙️ Fitur yang Diimplementasikan

- Reusable Component (Card, Section, Layout)
- Image Gallery dengan interaksi klik
- Sticky Tabs saat scroll
- Booking Card dengan Date Range Picker
- Review System (summary, list, modal)
- Map Section & Nearby Listings
- Responsive Layout menggunakan TailwindCSS

---

## 🚀 Tech Stack

- React (TypeScript)
- TailwindCSS
