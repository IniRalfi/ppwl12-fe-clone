import { useState, useRef } from "react";

function PlayPauseBtn({ playing, onClick }: { playing: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 bg-white rounded-full shadow-[0_2px_14px_rgba(0,0,0,0.18)] border border-deco/50 flex items-center justify-center hover:scale-105 transition-transform"
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-hof">
          <rect x="6" y="4" width="4" height="16" rx="1.5" />
          <rect x="14" y="4" width="4" height="16" rx="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-hof">
          <path d="M8 5.14v14l11-7-11-7z" />
        </svg>
      )}
    </button>
  );
}

// ── Big center video card (tanpa frame HP) ──────────────────────────────────
function BigPromoCard() {
  const [playing, setPlaying] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative inline-block">
      {/* Card container tanpa frame HP */}
      <div className="w-[280px] md:w-[320px] bg-black rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.14),8px_16px_32px_rgba(0,0,0,0.08)]">
        <video
          ref={ref}
          src="https://stream.media.muscache.com/mp4/OpY00Y00h00DDD7i4UKH1NgMo01qU3qaXkCsAvn1dCC5BZY.mp4?v_res=1080p"
          poster="https://a0.muscache.com/im/pictures/canvas/Canvas-1745865370833/original/6aab0543-5cfe-43c0-a811-c088bbdf9315.jpeg?im_w=1440&im_q=medq"
          className="w-full object-cover"
          style={{ aspectRatio: "9/16", maxHeight: 560 }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Play/pause di luar card */}
      <div className="absolute bottom-4 -right-6 z-20">
        <PlayPauseBtn playing={playing} onClick={toggle} />
      </div>
    </div>
  );
}

// ── 2-col promo cards ────────────────────────────────────────────────────────
const promoCards = [
  {
    video:
      "https://stream.media.muscache.com/mp4/1qVr6Fl5SSI43rR013KQHQJRXvnvbVsH3qEv5Tnjk2T4.mp4?v_res=1080p",
    poster:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865341318/original/f666738c-7d59-4b81-9369-f06e62f4120e.jpeg?im_w=1440&im_q=medq",
    title: "Iklan Anda akan ditampilkan saat tamu merencanakan perjalanan",
    desc: "Layanan Anda dapat dilihat oleh orang yang memiliki rencana perjalanan mendatang ke kota Anda.",
  },
  {
    video:
      "https://stream.media.muscache.com/mp4/huMcdYjdI9ZfS5YsalQitzESSvzBgbveKgAusC00ivzA.mp4?v_res=1080p",
    poster:
      "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865314510/original/193f0ed8-2156-4238-94a9-af766b60a9f6.jpeg?im_w=1440&im_q=medq",
    title: "Direkomendasikan kepada tamu yang bepergian",
    desc: "Iklan Anda akan ditampilkan di jadwal perjalanan tamu, menawarkan cara untuk menjadikan masa inap mereka lebih istimewa.",
  },
];

function PromoCard({ card }: { card: (typeof promoCards)[0] }) {
  const [playing, setPlaying] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-sm">
      {/* Video card tanpa frame HP */}
      <div className="relative px-8 pt-8 pb-0 flex justify-center">
        <div className="w-full max-w-[260px] bg-black rounded-[24px] overflow-hidden shadow-lg">
          <video
            ref={ref}
            src={card.video}
            poster={card.poster}
            className="w-full object-cover"
            style={{ aspectRatio: "9/16", maxHeight: 340 }}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        {/* Play/pause di pojok kanan bawah area video */}
        <div className="absolute bottom-3 right-6 z-10">
          <PlayPauseBtn playing={playing} onClick={toggle} />
        </div>
      </div>

      {/* Caption */}
      <div className="px-8 py-7 text-center">
        <h4 className="text-[15px] md:text-[16px] font-semibold text-hof leading-snug">
          {card.title}
        </h4>
        <p className="mt-2 text-[13px] md:text-[14px] text-foggy leading-relaxed">{card.desc}</p>
      </div>
    </div>
  );
}

export default function ServicesPromotion() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Block 1 — Iklan mengesankan */}
        <div className="text-center mb-28">
          <h2 className="text-[36px] md:text-[52px] lg:text-[62px] font-bold text-hof leading-[1.04] tracking-tight">
            Iklan mengesankan.
            <br />
            Langsung mendapatkan pemesanan.
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-foggy max-w-[480px] mx-auto leading-relaxed">
            Buat iklan yang menarik dan isi kalender Anda dengan pemesanan instan.
          </p>
          <div className="mt-14 flex justify-center">
            <BigPromoCard />
          </div>
        </div>

        {/* Block 2 — Jangkau lebih banyak */}
        <div className="text-center mb-14">
          <h3 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-hof leading-tight tracking-tight">
            Jangkau lebih banyak orang
            <br />
            dengan lebih banyak cara
          </h3>
          <p className="mt-5 text-[16px] md:text-[18px] text-foggy max-w-[540px] mx-auto leading-relaxed">
            Kami mempromosikan layanan seperti milik Anda kepada tamu yang sedang merencanakan
            perjalanan atau sedang bepergian.
          </p>
        </div>

        {/* 2-col cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promoCards.map((c, i) => (
            <PromoCard key={i} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
