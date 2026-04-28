// ==========================================
// DATA: MODE "HOME"
// ==========================================
export const inspirationTabs = [
  "Populer",
  "Seni & budaya",
  "Pantai",
  "Pegunungan",
  "Alam terbuka",
  "Aktivitas",
];

export const inspirationData = [
  { city: "North Myrtle Beach", type: "Sewa apartemen" },
  { city: "Portland", type: "Sewa kabin" },
  { city: "Nice", type: "Sewa vila" },
  { city: "Florida Keys", type: "Sewa cottage" },
  { city: "Maui", type: "Sewa Bulanan" },
  { city: "Philadelphia", type: "Sewa apartemen" },

  { city: "Orange Beach", type: "Sewa vila" },
  { city: "Pittsburgh", type: "Sewa Bulanan" },
  { city: "Big Bear Lake", type: "Sewa kondominium" },
  { city: "Brooklyn", type: "Sewa tempat liburan" },
  { city: "Dallas", type: "Sewa tempat liburan" },
  { city: "Tokyo", type: "Sewa tempat liburan" },

  { city: "Pegunungan Pocono", type: "Sewa Bulanan" },
  { city: "Galveston", type: "Sewa rumah" },
  { city: "Nashville", type: "Sewa kondominium" },
  { city: "Port Aransas", type: "Sewa cottage" },
  { city: "San Jose", type: "Sewa vila" },
];

// ==========================================
// DATA: MODE "DETAIL"
// ==========================================
export const detailBreadcrumbs = ["Airbnb", "Malaysia", "Sarawak", "Kuching"];

export const detailNearbyDestinations = [
  { city: "Sibu", type: "Sewa tempat liburan" },
  { city: "Bintulu", type: "Sewa tempat liburan" },
  { city: "Kota Samarahan", type: "Sewa tempat liburan" },

  { city: "Pontianak", type: "Sewa tempat liburan" },
  { city: "Sematan", type: "Sewa tempat liburan" },
  { city: "Singkawang", type: "Sewa tempat liburan" },

  { city: "Lundu", type: "Sewa tempat liburan" },
  { city: "Sri Aman", type: "Sewa tempat liburan" },
  { city: "Dalat", type: "Sewa tempat liburan" },
];

export const detailOtherTypes = [
  "Sewa tempat liburan di Kuching",
  "Penginapan bulanan di Kuching",
  "Tempat berlibur yang cocok untuk keluarga di Kuching",

  "Sewa tempat liburan dengan kolam renang di Kuching",
  "Sewa tempat liburan yang ramah hewan peliharaan di Kuching",
  "Sewa rumah untuk liburan di Kuching",

  "Sewa tempat liburan yang ramah hewan peliharaan di Sarawak",
  "Sewa rumah untuk liburan di Sarawak",
  "Sewa tempat liburan dengan kolam renang di Sarawak",
];

// ==========================================
// DATA: SHARED (GLOBAL)
// ==========================================
export type FooterSection = "dukungan" | "menjadi_tuan_rumah" | "airbnb";

export const footerLinks: Record<FooterSection, { title: string; links: string[] }> = {
  dukungan: {
    title: "Dukungan",
    links: [
      "Pusat Bantuan",
      "Bantuan terkait keselamatan",
      "AirCover",
      "Anti-diskriminasi",
      "Dukungan disabilitas",
      "Opsi pembatalan",
      "Laporkan masalah lingkungan",
    ],
  },
  menjadi_tuan_rumah: {
    title: "Menjadi Tuan Rumah",
    links: [
      "Jadikan tempat Anda Airbnb",
      "Jadikan pengalaman Anda Airbnb",
      "Jadikan layanan Anda Airbnb",
      "AirCover untuk Tuan Rumah",
      "Sumber informasi menerima tamu",
      "Forum komunitas",
      "Menerima tamu dengan bijak",
      "Ikuti kelas menerima tamu secara gratis",
      "Temukan rekan tuan rumah",
      "Rekomendasikan tuan rumah",
    ],
  },
  airbnb: {
    title: "Airbnb",
    links: [
      "Update Mei 2025",
      "Ruang Berita",
      "Karier",
      "Investor",
      "Penginapan darurat Airbnb.org",
    ],
  },
};
