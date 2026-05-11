// src/components/host/services/ServicesFAQ.tsx
// Ref image 5: default COLLAPSED (chevron down), section title only visible initially
// Click section → expand → tampilkan semua Q&A di section itu
// Konten & link persis sesuai data asli Airbnb
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionData {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSectionData[] = [
  {
    title: "Pertanyaan populer",
    items: [
      {
        question: "Apakah layanan saya cocok untuk Airbnb?",
        answer: (
          <>
            Airbnb Services adalah marketplace untuk layanan berkualitas tinggi yang menjadikan masa inap tamu lebih baik lagi. Layanan mencakup katering, chef, hairstyling, make-up, pijat, perawatan kuku, latihan pribadi, fotografi, makanan jadi, dan perawatan spa.{" "}
            <a href="https://www.airbnb.co.id/resources/hosting-services/a/services-standards-requirements-744" className="underline text-hof hover:text-rausch transition-colors" target="_blank" rel="noopener noreferrer">
              Pelajari lebih lanjut tentang standar Airbnb Services
            </a>.
          </>
        ),
      },
      {
        question: "Bagaimana cara pengajuannya?",
        answer: (
          <>
            Anda bisa memulai dengan mudah. Pertama, ceritakan sekilas tentang diri Anda dan layanan yang Anda tawarkan. Setelah itu, tambahkan foto, tentukan harga, dan ajukan iklan untuk ditinjau. Kami mungkin akan menghubungi Anda kembali dengan beberapa saran perubahan, permintaan untuk mengunggah lisensi, atau meminta bukti asuransi. Begitu iklan Anda disetujui, Anda bisa segera memublikasikannya dan mulai menawarkan layanan Anda kepada pelanggan.{" "}
            <a href="https://www.airbnb.co.id/setup/services/create" className="underline text-hof hover:text-rausch transition-colors" target="_blank" rel="noopener noreferrer">
              Mulai sekarang
            </a>.
          </>
        ),
      },
      {
        question: "Apa saja biaya yang dikenakan Airbnb?",
        answer: "Anda bisa membuat dan mengajukan iklan untuk ditinjau secara gratis. Airbnb otomatis memotong biaya layanan sebesar 15% dari bayaran masuk untuk setiap layanan yang dipesan.",
      },
    ],
  },
  {
    title: "Dasar-dasar menerima tamu",
    items: [
      {
        question: "Apakah saya harus memiliki bisnis yang sudah berjalan?",
        answer: (
          <>
            Biasanya tidak perlu berupa bisnis yang sudah berjalan. Tergantung peraturan setempat dan jenis layanan yang Anda tawarkan, kami mungkin akan meminta lisensi bisnis.{" "}
            <a href="https://www.airbnb.co.id/help/article/3892" className="underline text-hof hover:text-rausch transition-colors" target="_blank" rel="noopener noreferrer">
              Pelajari lebih lanjut tentang standar kualitas Services
            </a>.
          </>
        ),
      },
      {
        question: "Bagaimana tamu akan menemukan layanan saya?",
        answer: "Services memiliki tab khusus di Airbnb, dan bisa muncul di beberapa fase perjalanan tamu—dari hasil pencarian dan rekomendasi saat merencanakan perjalanan hingga email dan notifikasi.",
      },
      {
        question: "Seberapa cepat bayaran akan saya terima?",
        answer: "Tergantung pada layanan yang Anda tawarkan, metode bayaran masuk yang Anda tetapkan di profil Airbnb, dan lembaga keuangan Anda, biasanya Anda akan menerima bayaran sehari setelah memberikan layanan.",
      },
    ],
  },
  {
    title: "Proses pengajuan",
    items: [
      {
        question: "Seperti apa proses peninjauannya?",
        answer: "Setelah mengajukan iklan, Anda akan menerima email konfirmasi yang berisi langkah-langkah selanjutnya. Setiap layanan akan ditinjau oleh orang sungguhan dalam tim kami untuk memastikan layanan tersebut memenuhi standar kami.",
      },
      {
        question: "Bagaimana layanan dievaluasi?",
        answer: "Airbnb Services terseleksi kualitasnya, dengan mempertimbangkan hal-hal seperti jumlah tahun pengalaman, pendidikan, sertifikasi, penghargaan, portofolio yang kuat, pilihan layanan yang kreatif, dan umpan balik positif dari tamu sebelumnya.",
      },
      {
        question: "Berapa lama proses peninjauan berlangsung?",
        answer: "Proses peninjauan biasanya membutuhkan waktu beberapa minggu. Namun, di area dengan tingkat permintaan tinggi, prosesnya mungkin memakan waktu lebih lama dan Anda mungkin akan dimasukkan ke daftar tunggu.",
      },
    ],
  },
  {
    title: "Lisensi & asuransi",
    items: [
      {
        question: "Apakah saya membutuhkan lisensi bisnis?",
        answer: (
          <>
            Ini tergantung pada tipe iklan yang Anda buat serta peraturan setempat. Jika ada lisensi atau dokumentasi lain yang diperlukan, kami akan memberi tahu Anda setelah meninjau iklan, lalu kami akan meminta Anda mengirimkan dokumen tambahan.{" "}
            <a href="https://www.airbnb.co.id/help/article/3892" className="underline text-hof hover:text-rausch transition-colors" target="_blank" rel="noopener noreferrer">
              Pelajari lebih lanjut tentang persyaratan lisensi untuk tuan rumah layanan
            </a>.
          </>
        ),
      },
      {
        question: "Apakah saya harus memiliki asuransi saya sendiri?",
        answer: "Airbnb mengharuskan Anda memiliki asuransi liabilitas yang sesuai untuk bisnis Anda, dan kami mungkin akan meminta bukti asuransi ini.",
      },
      {
        question: "Apakah Airbnb menyediakan asuransi?",
        answer: (
          <>
            Selain itu, Airbnb menyediakan asuransi liabilitas yang memberikan perlindungan hingga $1 juta USD bagi tuan rumah layanan apabila mereka terbukti bertanggung jawab secara hukum atas cedera yang dialami tamu atau orang lain, atau kerusakan atau pencurian barang-barang tamu selama mengikuti Airbnb Service.{" "}
            <a href="https://www.airbnb.co.id/help/article/1608" className="underline text-hof hover:text-rausch transition-colors" target="_blank" rel="noopener noreferrer">
              Pelajari lebih lanjut tentang asuransi liabilitas bagi tuan rumah layanan
            </a>.
          </>
        ),
      },
    ],
  },
];

function FAQSection({ section }: { section: FAQSectionData }) {
  // Default COLLAPSED (false) sesuai ref image 5
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-deco">
      {/* Section title row — click to toggle */}
      <button
        className="w-full flex items-center justify-between py-5 text-left hover:bg-transparent group"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-hof">
          {section.title}
        </span>
        {open
          ? <ChevronUp className="w-5 h-5 text-hof shrink-0" />
          : <ChevronDown className="w-5 h-5 text-hof shrink-0" />
        }
      </button>

      {/* Q&A content — animated expand/collapse */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 space-y-6">
          {section.items.map((item, i) => (
            <div key={i}>
              <p className="text-[14px] md:text-[15px] font-semibold text-hof leading-snug">
                {item.question}
              </p>
              <p className="text-[14px] text-foggy mt-1.5 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesFAQ() {
  return (
    <section className="py-20 bg-faint">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-hof text-center mb-14 leading-tight tracking-tight">
            Pertanyaan Anda,
            <br />
            sudah terjawab
          </h2>

          {/* FAQ sections — all collapsed by default */}
          {faqData.map((section, i) => (
            <FAQSection key={i} section={section} />
          ))}

          {/* Bottom border */}
          <div className="border-t border-deco" />

        </div>
      </div>
    </section>
  );
}
