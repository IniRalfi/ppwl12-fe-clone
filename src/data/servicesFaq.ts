// src/data/servicesFaq.ts
import type { FAQSection } from "../types/hostServices";

export const servicesFaq: FAQSection[] = [
  {
    sectionTitle: "Pertanyaan populer",
    items: [
      {
        question: "Apakah layanan saya cocok untuk Airbnb?",
        answer:
          "Airbnb Services adalah marketplace untuk layanan berkualitas tinggi yang menjadikan masa inap tamu lebih baik lagi. Layanan mencakup katering, chef, hairstyling, make-up, pijat, perawatan kuku, latihan pribadi, fotografi, makanan jadi, dan perawatan spa. Pelajari lebih lanjut tentang standar Airbnb Services.",
      },
      {
        question: "Bagaimana cara pengajuannya?",
        answer:
          "Anda bisa memulai dengan mudah. Pertama, ceritakan sekilas tentang diri Anda dan layanan yang Anda tawarkan. Setelah itu, tambahkan foto, tentukan harga, dan ajukan iklan untuk ditinjau. Kami mungkin akan menghubungi Anda kembali dengan beberapa saran perubahan, permintaan untuk mengunggah lisensi, atau meminta bukti asuransi. Begitu iklan Anda disetujui, Anda bisa segera mempublikasikannya dan mulai menawarkan layanan Anda kepada pelanggan.",
      },
      {
        question: "Apa saja biaya yang dikenakan Airbnb?",
        answer:
          "Anda bisa membuat dan mengajukan iklan untuk ditinjau secara gratis. Airbnb otomatis memotong biaya layanan sebesar 15% dari bayaran masuk untuk setiap layanan yang dipesan.",
      },
    ],
  },
  {
    sectionTitle: "Dasar-dasar menerima tamu",
    items: [
      {
        question: "Apakah saya harus memiliki bisnis yang sudah berjalan?",
        answer:
          "Biasanya tidak perlu berupa bisnis yang sudah berjalan. Tergantung peraturan setempat dan jenis layanan yang Anda tawarkan, kami mungkin akan meminta lisensi bisnis.",
      },
      {
        question: "Bagaimana tamu akan menemukan layanan saya?",
        answer:
          "Services memiliki tab khusus di Airbnb, dan bisa muncul di beberapa fase perjalanan tamu—dari hasil pencarian dan rekomendasi saat merencanakan perjalanan hingga email dan notifikasi.",
      },
      {
        question: "Seberapa cepat bayaran akan saya terima?",
        answer:
          "Tergantung pada layanan yang Anda tawarkan, metode bayaran masuk yang Anda tetapkan di profil Airbnb, dan lembaga keuangan Anda, biasanya Anda akan menerima bayaran sehari setelah memberikan layanan.",
      },
    ],
  },
  {
    sectionTitle: "Proses pengajuan",
    items: [
      {
        question: "Seperti apa proses peninjauannya?",
        answer:
          "Setelah mengajukan iklan, Anda akan menerima email konfirmasi yang berisi langkah-langkah selanjutnya. Setiap layanan akan ditinjau oleh orang sungguhan dalam tim kami untuk memastikan layanan tersebut memenuhi standar kami.",
      },
      {
        question: "Bagaimana layanan dievaluasi?",
        answer:
          "Airbnb Services terseleksi kualitasnya, dengan mempertimbangkan hal-hal seperti jumlah tahun pengalaman, pendidikan, sertifikasi, penghargaan, portofolio yang kuat, pilihan layanan yang kreatif, dan umpan balik positif dari tamu sebelumnya.",
      },
      {
        question: "Berapa lama proses peninjauan berlangsung?",
        answer:
          "Proses peninjauan biasanya membutuhkan waktu beberapa minggu. Namun, di area dengan tingkat permintaan tinggi, prosesnya mungkin memakan waktu lebih lama dan Anda mungkin akan dimasukkan ke daftar tunggu.",
      },
    ],
  },
  {
    sectionTitle: "Lisensi & asuransi",
    items: [
      {
        question: "Apakah saya membutuhkan lisensi bisnis?",
        answer:
          "Ini tergantung pada tipe iklan yang Anda buat serta peraturan setempat. Jika ada lisensi atau dokumentasi lain yang diperlukan, kami akan memberi tahu Anda setelah meninjau iklan, lalu kami akan meminta Anda mengirimkan dokumen tambahan.",
      },
      {
        question: "Apakah saya harus memiliki asuransi saya sendiri?",
        answer:
          "Airbnb mengharuskan Anda memiliki asuransi liabilitas yang sesuai untuk bisnis Anda, dan kami mungkin akan meminta bukti asuransi ini.",
      },
      {
        question: "Apakah Airbnb menyediakan asuransi?",
        answer:
          "Selain itu, Airbnb menyediakan asuransi liabilitas yang memberikan perlindungan hingga $1 juta USD bagi tuan rumah layanan apabila mereka terbukti bertanggung jawab secara hukum atas cedera yang dialami tamu atau orang lain, atau kerusakan atau pencurian barang-barang tamu selama mengikuti Airbnb Service.",
      },
    ],
  },
];
