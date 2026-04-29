// src/components/rooms/RoomsDescription.tsx
import { useState } from "react";

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm0 2c7.18 0 13 5.82 13 13S23.18 29 16 29 3 23.18 3 16 8.82 3 16 3zm6.5 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.5 2a6 6 0 00-5.748 4.305.75.75 0 001.437.44A4.5 4.5 0 0116 14a4.5 4.5 0 014.311 3.245.75.75 0 001.437-.44A6 6 0 0016 12.5z" />
      </svg>
    ),
    title: "Dinilai tinggi oleh tamu dari Indonesia",
    desc: "Dalam setahun terakhir, 100% tamu dari Indonesia memberi nilai 5 bintang untuk penginapan ini.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path d="M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13zm-13 9a9 9 0 100-18 9 9 0 000 18zm1-13v4h4v2h-6V12h2z" />
      </svg>
    ),
    title: "Tunggu apa lagi?",
    desc: "Ini salah satu dari sedikit tempat di area ini yang menyediakan kolam renang.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path d="M16 2a14 14 0 110 28A14 14 0 0116 2zm0 2a12 12 0 100 24A12 12 0 0016 4zm1 5v5.586l3.707 3.707-1.414 1.414L15 15.414V9h2z" />
      </svg>
    ),
    title: "Dirancang agar tetap sejuk",
    desc: "Atasi hawa panas dengan AC dan kipas angin gantung.",
  },
];

const RoomsDescription = () => {
  const [expanded, setExpanded] = useState(false);

  const shortDesc = `Nikmati akomodasi mewah di jantung Kuala Lumpur. Unit ini sempurna untuk keluarga atau grup besar dengan kapasitas hingga 12 tamu. Dilengkapi dengan 3 kamar tidur yang nyaman, kolam renang eksklusif, dan lokasi strategis dekat pusat perbelanjaan serta atraksi wisata utama.`;

  const fullDesc = `${shortDesc}\n\nUnit ini menawarkan pemandangan kota yang memukau dari lantai atas. Dapur lengkap tersedia untuk memasak, serta ruang tamu luas yang cocok untuk berkumpul bersama. Wifi cepat tersedia di seluruh area, dan lift memudahkan akses ke unit Anda.`;

  return (
    <div className="py-6 border-b border-gray-200">
      {/* Highlights */}
      <div className="space-y-4 mb-6">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-gray-700 shrink-0">{item.icon}</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {expanded ? fullDesc : shortDesc}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-gray-900 font-semibold underline text-sm hover:text-gray-600 transition-colors"
        >
          {expanded ? "Tampilkan lebih sedikit" : "Tampilkan selengkapnya →"}
        </button>
      </div>
    </div>
  );
};

export default RoomsDescription;
