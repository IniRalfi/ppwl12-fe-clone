# PPWL 12 — FE Clone

Kelas Praktikum Pemrograman Web Lanjut 2026 (Sistem Informasi / UNTAN) — Minggu ke-12.

- Tiap tim diberi beberapa URL sub-page (Home, Detail, dll.) dari web yang sama.
- Menggunakan React TypeScript & TailwindCSS untuk membuat UI dan interaksi semirip mungkin dengan referensi.

---

## 🏷️ Kelas A / Tim 3

**Referensi Web:** [airbnb.co.id](https://www.airbnb.co.id/)

---

## 👥 Tim & Pembagian Tugas

| Nama                    | NIM          | Referensi Halaman | Komponen |
| ----------------------- | ------------ | ----------------- | --------- |
| Rafli Pratama           | H1101241008  | [Home](https://www.airbnb.co.id/) & [Rooms Detail](https://www.airbnb.co.id/rooms/1380232605919031155?check_in=2026-05-22&check_out=2026-05-24&photo_id=2110947891&source_impression_id=p3_1778470327_P3AE0VadbvBaeCtT&previous_page_section_name=1000) | `Navbar.tsx`, `Footer.tsx`, `AppWrapper.tsx`, Integrasi Layout Halaman |
| Adella Rheina Sweeta    | H1101241036  | [Home](https://www.airbnb.co.id/) | `experiences/ExperienceCard.tsx`, `experiences/ExperienceSection.tsx` |
| Rifa Dwinanda Bagaskara | H1101241023  | [Host Services](https://www.airbnb.co.id/host/services) | `rooms/RoomsMap.tsx`, `rooms/HostProfile.tsx`, `rooms/RoomsInfoExtra.tsx`, `rooms/NearbyRooms.tsx` |
| Tan Atira Yasmin        | H1101241032  | [Rooms Detail](https://www.airbnb.co.id/rooms/1380232605919031155?check_in=2026-05-22&check_out=2026-05-24&photo_id=2110947891&source_impression_id=p3_1778470327_P3AE0VadbvBaeCtT&previous_page_section_name=1000) | `rooms/ImageGallery.tsx`, `rooms/StickyTabs.tsx` |
| Olivia Naura Fakhradika | H1101241019  | [Rooms Detail](https://www.airbnb.co.id/rooms/1380232605919031155?check_in=2026-05-22&check_out=2026-05-24&photo_id=2110947891&source_impression_id=p3_1778470327_P3AE0VadbvBaeCtT&previous_page_section_name=1000) | `rooms/HostInfo.tsx`, `rooms/RoomsDescription.tsx`, `rooms/Amenities.tsx`, `rooms/BookingCard.tsx`, `rooms/DatePicker.tsx` |
| Salsabila Nur Anisa     | H1101241026  | [Rooms Detail](https://www.airbnb.co.id/rooms/1380232605919031155?check_in=2026-05-22&check_out=2026-05-24&photo_id=2110947891&source_impression_id=p3_1778470327_P3AE0VadbvBaeCtT&previous_page_section_name=1000) | `rooms/ReviewSummary.tsx`, `rooms/ReviewList.tsx`, `rooms/ReviewModal.tsx`, `rooms/ReviewCard.tsx` |
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
