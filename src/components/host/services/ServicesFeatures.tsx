// src/components/host/services/ServicesFeatures.tsx
// Ref 7 & 8: 4 cards 2x2, phone crops bottom, real UI screenshots inside

function SBar({ light = false }: { light?: boolean }) {
  const txt = light ? "text-black" : "text-white";
  return (
    <div
      className={`flex items-center justify-between px-4 py-1.5 ${light ? "bg-white" : "bg-black"} relative`}
    >
      <span className={`text-[10px] font-semibold z-10 ${txt}`}>9:41</span>
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[80px] h-[24px] ${light ? "bg-black" : "bg-black"} rounded-full z-10 border border-[#1a1a1a]`}
      />
      <div className={`flex items-center gap-1 z-10 ${txt}`}>
        <svg viewBox="0 0 17 12" className="w-[12px] h-[9px] fill-current">
          <rect x="0" y="5" width="3" height="7" rx="0.8" />
          <rect x="4.5" y="3.5" width="3" height="8.5" rx="0.8" />
          <rect x="9" y="1.5" width="3" height="10.5" rx="0.8" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 15 11" className="w-[11px] h-[8px] fill-current">
          <path d="M7.5 9a1.4 1.4 0 110 2 1.4 1.4 0 010-2zm0-3.8c1.7 0 3.2.7 4.3 1.8l-1.3 1.3A4.3 4.3 0 007.5 7a4.3 4.3 0 00-3 1.3L3.2 7A6.2 6.2 0 017.5 5.2zm0-4c3 0 5.7 1.2 7.6 3.2l-1.3 1.3A8.6 8.6 0 007.5 3.2a8.6 8.6 0 00-6.3 2.5L-.1 4.4A10.6 10.6 0 017.5 1.2z" />
        </svg>
        <div className="flex items-center gap-px">
          <div className="w-[18px] h-[9px] rounded-[2px] border border-current/50 p-px">
            <div className="h-full w-[78%] bg-current rounded-[0.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Booking screen (ref 7 left) ──────────────────────────────────────────────
function BookingScreen() {
  return (
    <div className="bg-white h-full overflow-hidden">
      <div className="flex items-center gap-2 px-4 pt-3 pb-2">
        <div className="px-3 py-1.5 bg-hof text-white rounded-full text-[11px] font-semibold">
          Today
        </div>
        <div className="px-3 py-1.5 text-foggy text-[11px]">Upcoming</div>
        <div className="ml-auto w-6 h-6 rounded-full border border-deco flex items-center justify-center">
          <svg viewBox="0 0 16 16" className="w-3 h-3 fill-foggy">
            <path
              d="M2 4h12M5 8h6M7 12h2"
              stroke="#6a6a6a"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="px-4 pb-2">
        <p className="text-[18px] font-bold text-hof leading-tight">
          You're cooking
          <br />
          for 2 groups
        </p>
        <p className="text-[11px] text-foggy mt-3 mb-3">2:00 PM – 1:00 PM</p>
        <div className="rounded-2xl border border-deco p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=240"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[12px] font-semibold text-hof">Alexi's meal for 5</p>
            <p className="text-[10px] text-foggy">Local taqueada</p>
            <div className="flex items-center gap-1 mt-0.5">
              <svg viewBox="0 0 16 16" className="w-3 h-3 fill-none stroke-foggy" strokeWidth="1.5">
                <rect x="2" y="2" width="12" height="12" rx="2" />
                <path d="M2 6h12M6 2v4M10 2v4" />
              </svg>
              <p className="text-[10px] text-foggy">2 notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Calendar screen (ref 7 right) ────────────────────────────────────────────
function CalendarScreen() {
  return (
    <div className="bg-white h-full overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-deco">
        <div className="flex items-center gap-1">
          <span className="text-[12px] font-semibold text-hof">May</span>
          <svg viewBox="0 0 12 8" className="w-2.5 h-2 fill-hof">
            <path d="M1 1l5 5 5-5" />
          </svg>
        </div>
        <div className="flex gap-1.5">
          <button className="w-6 h-6 rounded-full border border-deco flex items-center justify-center">
            <svg viewBox="0 0 16 16" className="w-3 h-3 fill-none stroke-foggy" strokeWidth="1.5">
              <path d="M8 2v12M14 8H2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="w-6 h-6 rounded-full border border-deco flex items-center justify-center">
            <svg viewBox="0 0 16 16" className="w-3 h-3 fill-none stroke-foggy" strokeWidth="1.5">
              <rect x="2" y="2" width="12" height="12" rx="2" />
            </svg>
          </button>
          <button className="w-6 h-6 rounded-full border border-deco flex items-center justify-center">
            <svg viewBox="0 0 16 16" className="w-3 h-3 fill-none stroke-foggy" strokeWidth="1.5">
              <path d="M8 2v12M2 8h12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 px-1 py-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-center text-[8px] text-foggy py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 px-1">
        {[18, 19, 20, 21, 22, 23, 24].map((d) => (
          <div key={d} className="flex flex-col items-center py-0.5">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium ${d === 22 ? "bg-rausch text-white" : "text-hof"}`}
            >
              {d}
            </div>
            {[19, 22, 23].includes(d) && <div className="w-1 h-1 rounded-full bg-hof mt-0.5" />}
          </div>
        ))}
      </div>
      <div className="px-2 mt-1 relative">
        {["3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"].map((t, i) => (
          <div key={t} className="flex items-start gap-1 mb-1">
            <span className="text-[7px] text-foggy w-6 pt-0.5 shrink-0">{t}</span>
            {i === 0 && (
              <div className="flex-1 h-7 bg-blue-100 rounded px-1 py-0.5">
                <p className="text-[7px] font-medium text-blue-700 leading-tight">Local taqueada</p>
                <p className="text-[6px] text-blue-500">5 guests</p>
              </div>
            )}
            {i === 3 && (
              <div className="flex-1 h-9 bg-blue-100 rounded px-1 py-0.5">
                <p className="text-[7px] font-medium text-blue-700 leading-tight">Local taqueada</p>
                <p className="text-[6px] text-blue-500">8 guests</p>
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-1 left-2 right-2 flex gap-1.5">
          <button className="flex-1 py-1.5 bg-hof text-white rounded-full text-[8px] font-semibold text-center">
            Add availability
          </button>
          <button className="flex-1 py-1.5 bg-hof text-white rounded-full text-[8px] font-semibold text-center">
            Block time
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Messaging screen (ref 8 left) ────────────────────────────────────────────
function MessagingScreen() {
  return (
    <div className="bg-white h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-3 py-2 border-b border-deco gap-2">
        <button>
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="#222"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="w-6 h-6 rounded-full bg-bebe overflow-hidden shrink-0">
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=240"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-hof truncate">Alexi</p>
          <p className="text-[9px] text-foggy truncate">
            May 22, 2:00 PM · Homecooked heritage by Raja
          </p>
        </div>
        <span className="text-[10px] text-rausch font-semibold shrink-0">Details</span>
      </div>
      {/* Messages */}
      <div className="p-3 space-y-2.5">
        <div className="flex gap-2 items-end">
          <div className="w-5 h-5 rounded-full bg-bebe overflow-hidden shrink-0">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=240"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[9px] text-foggy mb-0.5">Alexi 9:38 AM</p>
            <div className="bg-faint rounded-2xl rounded-bl-sm px-2.5 py-1.5 max-w-[120px]">
              <p className="text-[10px] text-hof">Can we make this gluten-free?</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-hof rounded-2xl rounded-br-sm px-2.5 py-1.5 max-w-[120px]">
            <p className="text-[10px] text-white">Yes, happy to accommodate!</p>
          </div>
        </div>
        {/* Custom offer card */}
        <div className="bg-faint rounded-2xl p-2.5 border border-deco">
          <p className="text-[9px] text-foggy mb-1">Custom offer sent</p>
          <p className="text-[11px] font-semibold text-hof">Local taqueada</p>
          <p className="text-[9px] text-foggy">May 22, 2:00 PM · $315 for 5 guests</p>
          <div className="mt-1.5 rounded-lg overflow-hidden h-16">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435442988/original/025a928a-4e57-4000-90a9-6142f101e85c.jpeg?im_w=240"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[9px] text-foggy mt-1">Alexi has until May 15, 9:41 AM to respond</p>
        </div>
      </div>
    </div>
  );
}

// ── Payment screen (ref 8 right) ─────────────────────────────────────────────
function PaymentScreen() {
  return (
    <div className="bg-white h-full overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center px-3 py-2 border-b border-deco gap-2">
        <button>
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="#222"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex-1">
          <p className="text-[10px] text-foggy">May 22 · 2:00 PM</p>
          <p className="text-[10px] font-semibold text-hof">Confirmed</p>
        </div>
        <button>
          <svg viewBox="0 0 20 4" className="w-4 h-1 fill-hof">
            <circle cx="2" cy="2" r="2" />
            <circle cx="10" cy="2" r="2" />
            <circle cx="18" cy="2" r="2" />
          </svg>
        </button>
      </div>
      {/* Payment modal */}
      <div className="bg-white mx-2 mt-2 rounded-2xl border border-deco shadow-sm p-4 relative">
        <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-bebe flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-hof">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <p className="text-[22px] font-bold text-hof">$267.75</p>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <p className="text-[9px] text-foggy">
            Sent today · Arriving by June 1 <span className="text-hof underline">Details</span>
          </p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex justify-between">
            <span className="text-[10px] text-foggy">Bank account</span>
            <span className="text-[10px] text-hof">Checking — 3125</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-foggy">Payout ID</span>
            <span className="text-[10px] text-hof font-mono">G-YEFMGTXGJZ8G</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-deco flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=240"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-hof">HMXY2674XYZ</p>
            <p className="text-[9px] text-foggy">Alexi</p>
            <p className="text-[9px] text-foggy">Service · May 22</p>
            <p className="text-[9px] text-foggy">Homecooked heritage by Raja</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    id: "booking",
    title: "Kelola reservasi",
    desc: "Atur semuanya dengan detail yang jelas untuk setiap pemesanan.",
    Screen: BookingScreen,
    phoneBg: "bg-black",
  },
  {
    id: "calendar",
    title: "Permudah penjadwalan",
    desc: "Sinkronkan dengan Google Calendar, atur jam kerja, dan isi kalender yang masih kosong.",
    Screen: CalendarScreen,
    phoneBg: "bg-black",
  },
  {
    id: "messaging",
    title: "Kirimkan pesan kepada tamu",
    desc: "Kirimkan foto, video, dan terima pembayaran untuk permintaan khusus.",
    Screen: MessagingScreen,
    phoneBg: "bg-black",
  },
  {
    id: "payment",
    title: "Dapatkan bayaran dengan cepat",
    desc: "Terima pembayaran dengan aman dan lihat penghasilan Anda secara real-time.",
    Screen: PaymentScreen,
    phoneBg: "bg-[#222]",
  },
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  const { Screen } = feature;
  return (
    <div className="bg-faint rounded-3xl overflow-hidden">
      {/* Phone frame — crops at bottom of card */}
      <div className="flex justify-center pt-8 px-10">
        <div
          className={`w-full max-w-[230px] ${feature.phoneBg} rounded-t-[32px] overflow-hidden border-[6px] border-b-0 border-black shadow-lg`}
        >
          <SBar />
          <div className="h-[290px] overflow-hidden bg-white">
            <Screen />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="px-8 py-7 text-center">
        <h3 className="text-[16px] md:text-[17px] font-semibold text-hof">{feature.title}</h3>
        <p className="mt-2 text-[13px] md:text-[14px] text-foggy leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
}

export default function ServicesFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-hof leading-tight tracking-tight">
            Fitur-fitur kelas dunia
            <br />
            untuk bisnis lokal Anda
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-foggy max-w-[500px] mx-auto leading-relaxed">
            Pemesanan, kalender, pesan, dan pembayaran—semua ada di aplikasi Airbnb.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
