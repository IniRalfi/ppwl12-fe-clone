// src/data/servicesFeatures.ts
import type { ServiceFeature } from "../types/hostServices";

export const servicesFeatures: ServiceFeature[] = [
  {
    id: "manage-bookings",
    title: "Kelola reservasi",
    description: "Atur semuanya dengan detail yang jelas untuk setiap pemesanan.",
    mockupImage:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865341318/original/f666738c-7d59-4b81-9369-f06e62f4120e.jpeg?im_w=1440&im_q=medq",
    mockupAlt: "Tampilan layar tuan rumah yang menampilkan pemesanan hari ini",
  },
  {
    id: "scheduling",
    title: "Permudah penjadwalan",
    description:
      "Sinkronkan dengan Google Calendar, atur jam kerja, dan isi kalender yang masih kosong.",
    mockupImage:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865314510/original/193f0ed8-2156-4238-94a9-af766b60a9f6.jpeg?im_w=1440&im_q=medq",
    mockupAlt: "Layar kalender tuan rumah",
  },
  {
    id: "messaging",
    title: "Kirimkan pesan kepada tamu",
    description:
      "Kirimkan foto, video, dan terima pembayaran untuk permintaan khusus.",
    mockupImage:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865281942/original/9750528b-5630-4ef3-ba59-4dd229f8c675.jpeg?im_w=1440&im_q=medq",
    mockupAlt: "Layar pesan antara tuan rumah dan klien",
  },
  {
    id: "payments",
    title: "Dapatkan bayaran dengan cepat",
    description:
      "Terima pembayaran dengan aman dan lihat penghasilan Anda secara real-time.",
    mockupImage:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865232412/original/83c8a738-fc17-4a1c-8b05-cc4d40766912.jpeg?im_w=1440",
    mockupAlt: "Layar konfirmasi pembayaran tuan rumah",
  },
];
