# PPWL 12 — FE Clone

Kelas Praktikum Pemrograman Web Lanjut 2026 (Sistem Informasi / UNTAN) — Minggu ke-12.

- Tiap tim diberi beberapa URL sub-page (Home, Detail, dll.) dari web yang sama.
- Menggunakan React TypeScript & TailwindCSS untuk membuat UI dan interaksi semirip mungkin dengan referensi.

---

## 🏷️ Kelas A / Tim 3

**Referensi Web:** [airbnb.co.id](https://www.airbnb.co.id/)

---

## 👥 Tim & Pembagian Tugas

| Nama                    | NIM          | Halaman       | Komponen                                                                        |
| ----------------------- | ------------ | ------------- | ------------------------------------------------------------------------------- |
| Rafli Pratama           | H1101241008  | Home & Detail | Navbar (Full), Footer (Full), Integration & Page Layout                         |
| Adella Rheina Sweeta    | H1101241036  | Home          | Reusable Card, Rooms Section (Homes, Experiences, Services), Layout & Mapping   |
| Rifa Dwinanda Bagaskara | H1101241023  | Detail        | Map Section, Host Profile, Extra Info, Nearby Rooms                             |
| Tan Atira Yasmin        | H1101241032  | Detail        | Image Gallery, Gallery Detail View, Sticky Tabs                                 |
| Olivia Naura Fakhradika | H1101241019  | Detail        | Host Info, Description, Amenities, Booking Card, Date Picker                    |
| Salsabila Nur Anisa     | H1101241026  | Detail        | Review Summary, Review List, Review Modal                                       |

---

## 🧩 Pembagian Halaman

### 🏠 Home Page

| Komponen | PIC |
| -------- | --- |
| Navbar & Footer | Rafli Pratama |
| Rooms Section (Homes, Experiences, Services) | Adella |
| Reusable Card | Adella |

### 🛏️ Detail Page (`/rooms/:id`)

| Komponen | PIC |
| -------- | --- |
| Image Gallery & Sticky Tabs | Yasmin |
| Host Info, Description, Amenities, Booking Card & Date Picker | Olivia |
| Review Summary, Review List & Review Modal | Asa |
| Map Section, Host Profile, Extra Info, Nearby Rooms | Bagas |
| Navbar, Footer & Integration Layout | Rafli Pratama |

---

## 🗂️ Struktur Project

```
src/
├── components/
│   ├── experiences/        # Card & section untuk tab Homes/Experiences/Services
│   ├── rooms/              # Semua komponen halaman detail (/rooms/:id)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── SearchBar.tsx
├── data/                   # Dummy data untuk development awal
├── hooks/                  # Custom hooks (contoh: useScrolled)
├── pages/                  # Halaman utama (integrasi komponen)
└── types/                  # Definisi TypeScript untuk konsistensi data
```

---

## ⚙️ Fitur yang Diimplementasikan

- ✅ Reusable Component (Card, Section, Layout)
- ✅ Image Gallery dengan interaksi klik & fullscreen view
- ✅ Sticky Tabs saat scroll
- ✅ Booking Card dengan Date Range Picker
- ✅ Review System (summary, list, modal)
- ✅ Map Section & Nearby Rooms
- ✅ Responsive Layout menggunakan TailwindCSS

---

## 🚀 Tech Stack

| Teknologi | Versi |
| --------- | ----- |
| React | ^19 |
| TypeScript | ~5.8 |
| TailwindCSS | ^4 |
| Vite | ^8 |
| React Router DOM | ^7 |
| Bun | Runtime & Package Manager |
