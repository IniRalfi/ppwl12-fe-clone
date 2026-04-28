// src/components/listing/BookingCard.tsx
import { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface BookingCardProps {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  onDateClick: () => void;
  onGuestChange: (n: number) => void;
}

const PRICE_PER_NIGHT = 3_432_786;

const BookingCard = ({
  checkIn,
  checkOut,
  guests,
  onDateClick,
  onGuestChange,
}: BookingCardProps) => {
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [dewasa, setDewasa] = useState(1);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);
  const [hewan, setHewan] = useState(0);

  const MAX_TAMU = 12;
  const totalTamu = dewasa + anak;

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

  const nights = Math.max(
    1,
    Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  );

  const subtotal = PRICE_PER_NIGHT * nights;
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + serviceFee;

  const fmt = (d: Date) => format(d, "d/M/yyyy", { locale: id });
  const fmtPrice = (n: number) => `Rp${n.toLocaleString("id-ID")}`;

  const guestLabel = () => {
    const parts = [];
    parts.push(`${totalTamu} tamu`);
    if (bayi > 0) parts.push(`${bayi} bayi`);
    if (hewan > 0) parts.push(`${hewan} hewan`);
    return parts.join(", ");
  };

  // Counter component
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
    <div className="border border-gray-300 rounded-2xl p-6 shadow-xl bg-white">
      {/* Price Header */}
      <div className="mb-4">
        <span className="text-xl font-semibold text-gray-900 underline">
          {fmtPrice(PRICE_PER_NIGHT)}
        </span>
        <span className="text-gray-500 text-sm"> malam</span>
      </div>

      {/* Date & Guest Box */}
      <div className="border border-gray-300 rounded-xl overflow-visible mb-3">
        {/* Dates */}
        <div
          className="grid grid-cols-2 divide-x divide-gray-300 cursor-pointer hover:bg-gray-50 rounded-t-xl"
          onClick={onDateClick}
        >
          <div className="p-3">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Check-in</p>
            <p className="text-sm text-gray-900">{fmt(checkIn)}</p>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Check-out</p>
            <p className="text-sm text-gray-900">{fmt(checkOut)}</p>
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
        <div className="border border-gray-200 rounded-2xl shadow-lg bg-white p-5 mb-3 space-y-5">
          {/* Dewasa */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Dewasa</p>
              <p className="text-gray-500 text-xs">Usia 13+</p>
            </div>
            <Counter
              value={dewasa}
              onDec={() => updateDewasa(dewasa - 1)}
              onInc={() => updateDewasa(dewasa + 1)}
              disableDec={dewasa <= 1}
              disableInc={totalTamu >= MAX_TAMU}
            />
          </div>

          {/* Anak */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Anak</p>
              <p className="text-gray-500 text-xs">Usia 2–12</p>
            </div>
            <Counter
              value={anak}
              onDec={() => updateAnak(anak - 1)}
              onInc={() => updateAnak(anak + 1)}
              disableDec={anak <= 0}
              disableInc={totalTamu >= MAX_TAMU}
            />
          </div>

          {/* Bayi */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Bayi</p>
              <p className="text-gray-500 text-xs">Di bawah 2 tahun</p>
            </div>
            <Counter
              value={bayi}
              onDec={() => setBayi(Math.max(0, bayi - 1))}
              onInc={() => setBayi(bayi + 1)}
              disableDec={bayi <= 0}
              disableInc={bayi >= 5}
            />
          </div>

          {/* Hewan */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Hewan peliharaan</p>
              <p className="text-gray-500 text-xs underline cursor-pointer">
                Membawa hewan pemandu?
              </p>
            </div>
            <Counter
              value={hewan}
              onDec={() => setHewan(Math.max(0, hewan - 1))}
              onInc={() => setHewan(hewan + 1)}
              disableDec={hewan <= 0}
              disableInc={hewan >= 5}
            />
          </div>

          {/* Info */}
          <p className="text-xs text-gray-500 border-t pt-3">
            Tempat ini mengizinkan jumlah tamu maksimum {MAX_TAMU} orang, tidak termasuk bayi.
            Hewan peliharaan tidak diizinkan.
          </p>

          {/* Tutup */}
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
      <button className="w-full py-3 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-[#E61E4D] to-[#BD1E59] hover:from-[#D91953] hover:to-[#B0184F] transition-all shadow-md">
        Pesan
      </button>
      <p className="text-center text-sm text-gray-500 mt-2">Anda belum dikenakan biaya</p>

      {/* Price Breakdown */}
      <div className="mt-5 space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">{fmtPrice(PRICE_PER_NIGHT)} × {nights} malam</span>
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

      {/* Free Cancel */}
      <p className="mt-4 text-center text-sm text-gray-500 bg-gray-50 rounded-lg py-2">
        🎉 Pembatalan gratis sebelum 3 Mei
      </p>
    </div>
  );
};

export default BookingCard;