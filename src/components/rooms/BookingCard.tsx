// src/components/rooms/BookingCard.tsx
import { useState } from "react";

interface BookingCardProps {
  // Dari state RoomsDetail
  startDate: number | null;
  endDate: number | null;
  nights: number;
  currentMonthIndex: number;
  selecting: "checkin" | "checkout";
  isPromoApplied: boolean;
  guests: number;
  // Handlers dari RoomsDetail
  onSelectingChange: (s: "checkin" | "checkout") => void;
  onGuestChange: (n: number) => void;
  onDateClick: () => void; // buat scroll ke kalender
  onAddOneNight: () => void;
}

const PRICE_PER_NIGHT = 2_885_187;
const ADD_ON_PRICE = 2_087_561;

const BookingCard = ({
  startDate,
  endDate,
  nights,
  currentMonthIndex,
  selecting,
  isPromoApplied,

  onSelectingChange,
  onGuestChange,
  onDateClick,
  onAddOneNight,
}: BookingCardProps) => {
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [dewasa, setDewasa] = useState(1);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);
  const [hewan, setHewan] = useState(0);

  const MAX_TAMU = 12;
  const totalTamu = dewasa + anak;

  const subtotal = PRICE_PER_NIGHT * (nights || 1);
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + serviceFee;

  const fmtPrice = (n: number) => `Rp${n.toLocaleString("id-ID")}`;

  const updateDewasa = (val: number) => {
    const next = Math.max(1, val);
    if (next + anak <= MAX_TAMU) {
      setDewasa(next);
      onGuestChange(next + anak);
    }
  };

  const updateAnak = (val: number) => {
    const next = Math.max(0, val);
    if (dewasa + next <= MAX_TAMU) {
      setAnak(next);
      onGuestChange(dewasa + next);
    }
  };

  const guestLabel = () => {
    const parts = [`${totalTamu} tamu`];
    if (bayi > 0) parts.push(`${bayi} bayi`);
    if (hewan > 0) parts.push(`${hewan} hewan`);
    return parts.join(", ");
  };

  const Counter = ({
    value,
    onDec,
    onInc,
    disableDec,
    disableInc,
  }: {
    value: number;
    onDec: () => void;
    onInc: () => void;
    disableDec: boolean;
    disableInc: boolean;
  }) => (
    <div className="flex items-center gap-3">
      <button
        onClick={onDec}
        disabled={disableDec}
        className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 text-lg hover:border-gray-800 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
      >
        −
      </button>
      <span className="w-4 text-center text-sm font-medium">{value}</span>
      <button
        onClick={onInc}
        disabled={disableInc}
        className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 text-lg hover:border-gray-800 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
      >
        +
      </button>
    </div>
  );

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-xl bg-white space-y-4">
      {/* Promo Banner */}
      <div className="bg-faint border border-gray-200 rounded-xl p-4 transition-all duration-500">
        {!isPromoApplied ? (
          <div className="flex items-start gap-3">
            <span className="text-xl">🏷️</span>
            <div className="text-sm">
              <p className="font-bold text-gray-900 leading-snug">
                Tambah satu malam hanya {fmtPrice(ADD_ON_PRICE)}
              </p>
              <button
                onClick={onAddOneNight}
                className="font-bold underline mt-1.5 block hover:text-rose-600 transition-colors"
              >
                Gunakan tawaran
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 items-center text-sm font-bold text-gray-800">
            <div className="bg-green-600 text-white rounded-full p-1.5 flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            Tawaran berhasil ditambahkan!
          </div>
        )}
      </div>

      {/* Price Header */}
      <div>
        <span className="text-xl font-semibold text-gray-900 underline">
          {fmtPrice(PRICE_PER_NIGHT)}
        </span>
        <span className="text-gray-500 text-sm"> malam</span>
        {nights > 0 && (
          <div className="text-sm text-gray-500 mt-1 font-medium underline">
            Total: {fmtPrice(nights * PRICE_PER_NIGHT)}
          </div>
        )}
      </div>

      {/* Date & Guest Box */}
      <div className="border border-gray-300 rounded-xl overflow-visible">
        {/* Dates */}
        <div
          className="grid grid-cols-2 divide-x divide-gray-300 cursor-pointer hover:bg-gray-50 rounded-t-xl"
          onClick={onDateClick}
        >
          <div
            className={`p-3 rounded-tl-xl transition-colors ${selecting === "checkin" ? "bg-gray-100" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectingChange("checkin");
              onDateClick();
            }}
          >
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Check-in</p>
            <p className="text-sm text-gray-900">
              {startDate ? `${startDate}/${currentMonthIndex + 1}/26` : "Tambah tanggal"}
            </p>
          </div>
          <div
            className={`p-3 rounded-tr-xl transition-colors ${selecting === "checkout" ? "bg-gray-100" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectingChange("checkout");
              onDateClick();
            }}
          >
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Check-out</p>
            <p className="text-sm text-gray-900">
              {endDate ? `${endDate}/${currentMonthIndex + 1}/26` : "Tambah tanggal"}
            </p>
          </div>
        </div>

        {/* Guest Trigger */}
        <div
          className="border-t border-gray-300 p-3 cursor-pointer hover:bg-gray-50 rounded-b-xl relative"
          onClick={() => setShowGuestPicker(!showGuestPicker)}
        >
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Tamu</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-900">{guestLabel()}</p>
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform ${showGuestPicker ? "rotate-180" : ""}`}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M6 12l10 10 10-10" />
            </svg>
          </div>
        </div>
      </div>

      {/* Guest Picker Dropdown */}
      {showGuestPicker && (
        <div className="border border-gray-200 rounded-2xl shadow-lg bg-white p-5 space-y-5">
          {[
            {
              label: "Dewasa",
              sub: "Usia 13+",
              val: dewasa,
              dec: () => updateDewasa(dewasa - 1),
              inc: () => updateDewasa(dewasa + 1),
              disableDec: dewasa <= 1,
              disableInc: totalTamu >= MAX_TAMU,
            },
            {
              label: "Anak",
              sub: "Usia 2–12",
              val: anak,
              dec: () => updateAnak(anak - 1),
              inc: () => updateAnak(anak + 1),
              disableDec: anak <= 0,
              disableInc: totalTamu >= MAX_TAMU,
            },
            {
              label: "Bayi",
              sub: "Di bawah 2 tahun",
              val: bayi,
              dec: () => setBayi(Math.max(0, bayi - 1)),
              inc: () => setBayi(bayi + 1),
              disableDec: bayi <= 0,
              disableInc: bayi >= 5,
            },
            {
              label: "Hewan peliharaan",
              sub: "Membawa hewan pemandu?",
              val: hewan,
              dec: () => setHewan(Math.max(0, hewan - 1)),
              inc: () => setHewan(hewan + 1),
              disableDec: hewan <= 0,
              disableInc: hewan >= 5,
            },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900 text-sm">{row.label}</p>
                <p className="text-gray-500 text-xs">{row.sub}</p>
              </div>
              <Counter
                value={row.val}
                onDec={row.dec}
                onInc={row.inc}
                disableDec={row.disableDec}
                disableInc={row.disableInc}
              />
            </div>
          ))}
          <p className="text-xs text-gray-500 border-t pt-3">
            Tempat ini mengizinkan maksimum {MAX_TAMU} tamu, tidak termasuk bayi.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setShowGuestPicker(false)}
              className="text-sm font-semibold underline text-gray-900 hover:text-gray-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Pesan Button */}
      <button
        className={`w-full py-3 rounded-xl font-semibold text-white text-base transition-all shadow-md ${
          nights > 0
            ? "bg-linear-to-r from-[#E61E4D] to-[#BD1E59] hover:from-[#D91953] hover:to-[#B0184F]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {nights > 0 ? "Pesan" : "Periksa ketersediaan"}
      </button>
      <p className="text-center text-sm text-gray-500">Anda belum dikenakan biaya</p>

      {/* Price Breakdown */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">
            {fmtPrice(PRICE_PER_NIGHT)} × {nights || 1} malam
          </span>
          <span>{fmtPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Biaya layanan Airbnb</span>
          <span>{fmtPrice(serviceFee)}</span>
        </div>
        <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-3">
          <span>Total sebelum pajak</span>
          <span>{fmtPrice(total)}</span>
        </div>
      </div>

      {/* Promo Banner bawah */}
      <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-white ring-1 ring-black/5">
        <span className="text-xl text-rose-500">🏷️</span>
        <div className="text-sm text-gray-700">
          <p className="font-bold">Harga yang bagus</p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
            Masa inap Anda lebih hemat Rp577.943 dari harga rata-rata.
          </p>
        </div>
      </div>

      <p className="mt-1 text-center text-sm text-gray-500 bg-gray-50 rounded-lg py-2">
        🎉 Pembatalan gratis sebelum 3 Mei
      </p>

      <div className="flex justify-center pt-1">
        <button className="text-gray-500 flex items-center gap-2 text-sm font-semibold underline">
          <span>🚩</span> Laporkan iklan ini
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
