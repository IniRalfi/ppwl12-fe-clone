// src/components/host/services/ServicesHero.tsx
// Single phone, video plays directly inside phone frame (no nested phone)
// Teks kiri atas, phone besar kanan, pause/play di luar phone kanan bawah
import { useState, useRef, useEffect } from "react";

const slides = [
  {
    video: "https://stream.media.muscache.com/mp4/Y6COYfUMLQ5WycjA6M7aqaCvv4CWQ6UceNO5d9qZTMg.mp4?v_res=1080p",
    poster: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865370833/original/6aab0543-5cfe-43c0-a811-c088bbdf9315.jpeg?im_w=1440&im_q=medq",
    hostImg: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865370833/original/6aab0543-5cfe-43c0-a811-c088bbdf9315.jpeg?im_w=1440&im_q=medq",
    name: "Crafted cuts by Bryan",
    location: "Hair stylist in Chicago",
    serviceLabel: "Classic shave",
    serviceDesc: "Enjoy a traditional hot towel shave for a smooth, clean face. This includes a...",
    serviceImg: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435391001/original/927b4c14-55db-41d5-9093-adf6f419aba0.jpeg?im_w=240",
  },
  {
    video: "https://stream.media.muscache.com/mp4/1qVr6Fl5SSI43rR013KQHQJRXvnvbVsH3qEv5Tnjk2T4.mp4?v_res=1080p",
    poster: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745865341318/original/f666738c-7d59-4b81-9369-f06e62f4120e.jpeg?im_w=1440&im_q=medq",
    hostImg: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435335977/original/92f00797-2318-45c3-a425-829a8bafa48f.jpeg?im_w=240",
    name: "Recovery and relaxation by Deisy",
    location: "Massage therapist in Los Angeles",
    serviceLabel: "Happy feet",
    serviceDesc: "Refresh tired feet with reflexology techniques on pressure points linked to energy flow.",
    serviceImg: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435335977/original/92f00797-2318-45c3-a425-829a8bafa48f.jpeg?im_w=240",
  },
];

export default function ServicesHero() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.load();
    if (playing) v.play().catch(() => {});
  }, [idx]);

  const togglePlay = () => {
    const v = vidRef.current;
    if (!v) return;
    if (playing) { v.pause(); setPlaying(false); }
    else { v.play(); setPlaying(true); }
  };

  const s = slides[idx];

  return (
    <section className="bg-white overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      <div className="w-full max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-0 py-10 md:py-0">

          {/* LEFT: teks kiri atas */}
          <div className="w-full md:w-[42%] shrink-0 order-2 md:order-1 py-10 md:py-0 text-left">
            <h1 className="text-[40px] md:text-[52px] lg:text-[68px] font-bold text-hof leading-[1.05] tracking-tight">
              Beri tempat baru
              <br />
              untuk bisnis Anda
            </h1>
            <p className="mt-4 text-[16px] md:text-[18px] text-foggy leading-relaxed max-w-[380px]">
              Kini layanan Anda bisa menjangkau jutaan orang di Airbnb.
            </p>
          </div>

          {/* RIGHT: 1 phone saja, tidak ada phone di dalam phone */}
          <div className="flex-1 flex justify-center md:justify-end items-center order-1 md:order-2 relative">
            <div className="relative">

              {/* ── Phone frame ── */}
              <div className="w-[340px] md:w-[400px] lg:w-[460px] bg-black rounded-[52px] overflow-hidden border-[10px] border-black shadow-[0_30px_80px_rgba(0,0,0,0.16)]">

                {/* Status bar */}
                <div className="bg-black flex items-center justify-between px-6 pt-2.5 pb-1.5 relative">
                  <span className="text-white text-[12px] font-semibold z-10">9:41</span>
                  <div className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full border-[2px] border-[#111] z-10" />
                  <div className="flex items-center gap-1.5 z-10">
                    {/* Signal */}
                    <svg viewBox="0 0 17 12" className="w-[15px] h-[11px] fill-white">
                      <rect x="0" y="5" width="3" height="7" rx="0.8"/>
                      <rect x="4.5" y="3.5" width="3" height="8.5" rx="0.8"/>
                      <rect x="9" y="1.5" width="3" height="10.5" rx="0.8"/>
                      <rect x="13.5" y="0" width="3" height="12" rx="0.8"/>
                    </svg>
                    {/* Wifi */}
                    <svg viewBox="0 0 15 11" className="w-[13px] h-[10px] fill-white">
                      <path d="M7.5 9a1.4 1.4 0 110 2 1.4 1.4 0 010-2zm0-3.8c1.7 0 3.2.7 4.3 1.8l-1.3 1.3A4.3 4.3 0 007.5 7a4.3 4.3 0 00-3 1.3L3.2 7A6.2 6.2 0 017.5 5.2zm0-4c3 0 5.7 1.2 7.6 3.2l-1.3 1.3A8.6 8.6 0 007.5 3.2a8.6 8.6 0 00-6.3 2.5L-.1 4.4A10.6 10.6 0 017.5 1.2z"/>
                    </svg>
                    {/* Battery */}
                    <div className="flex items-center gap-[1px]">
                      <div className="w-[22px] h-[11px] rounded-[3px] border border-white/50 p-[1.5px]">
                        <div className="h-full w-[82%] bg-white rounded-[1.5px]"/>
                      </div>
                      <div className="w-[2px] h-[5px] bg-white/40 rounded-r"/>
                    </div>
                  </div>
                </div>

                {/* ── VIDEO langsung di dalam phone (no nested phone) ── */}
                <div className="relative overflow-hidden bg-black">
                  {/* Nav overlay (back / share / heart) */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
                    <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <div className="flex gap-2">
                      <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
                        </svg>
                      </button>
                      <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Video — langsung sebagai konten phone */}
                  <video
                    ref={vidRef}
                    src={s.video}
                    poster={s.poster}
                    className="w-full object-cover"
                    style={{ height: "260px" }}
                    autoPlay loop muted playsInline
                  />
                </div>

                {/* White card area — host info */}
                <div className="bg-white">
                  {/* Avatar overlapping video */}
                  <div className="flex justify-center">
                    <div className="w-[66px] h-[66px] rounded-full border-4 border-white overflow-hidden shadow-md -mt-8 relative z-10">
                      <img src={s.hostImg} alt="Host" className="w-full h-full object-cover object-top"/>
                    </div>
                  </div>

                  <div className="text-center px-5 pt-2 pb-3">
                    <h3 className="text-[16px] md:text-[17px] font-bold text-hof leading-snug">{s.name}</h3>
                    <p className="text-[13px] text-foggy mt-0.5">{s.location}</p>
                  </div>

                  {/* Service item */}
                  <div className="px-4 pb-5">
                    <div className="flex items-start gap-3 rounded-2xl border border-deco p-3">
                      <div className="w-[52px] h-[52px] rounded-xl overflow-hidden shrink-0">
                        <img src={s.serviceImg} alt={s.serviceLabel} className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-hof">{s.serviceLabel}</p>
                        <p className="text-[11px] text-foggy mt-0.5 leading-snug line-clamp-2">{s.serviceDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pause/Play button — di luar phone, pojok kanan bawah */}
              <button
                onClick={togglePlay}
                className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-full shadow-[0_2px_14px_rgba(0,0,0,0.20)] border border-deco/60 flex items-center justify-center hover:scale-105 transition-transform z-20"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing
                  ? <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-hof"><rect x="6" y="4" width="4" height="16" rx="1.5"/><rect x="14" y="4" width="4" height="16" rx="1.5"/></svg>
                  : <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-hof"><path d="M8 5.14v14l11-7-11-7z"/></svg>
                }
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
