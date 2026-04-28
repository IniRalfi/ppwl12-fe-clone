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

const PRICE_PER_NIGHT = 3_432_786; // dalam Rupiah

const BookingCard = ({
  checkIn,
  checkOut,
  guests,
  onDateClick,
  onGuestChange,
}: BookingCardProps) => {
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const nights = Math.max(
    1,
    Math.round(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    )
  );

  const subtotal = PRICE_PER_NIGHT * nights;
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + serviceFee;

  const fmt = (d: Date) =>
    format(d, "d/M/yyyy", { locale: id });

  const fmtPrice = (n: number) =>
    `Rp${n.toLocaleString("id-ID")}`;

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-xl bg-white">
      {/* Header - Price */}
      <div className="mb-4">
        <span className="text-xl font-semibold text-gray-900 underline">
          {fmtPrice(PRICE_PER_NIGHT)}
        </span>
        <span className="text-gray-500 text-sm"> malam</span>
      </div>

      {/* Date & Guest Selector */}
      <div className="border border-gray-300 rounded-xl overflow-hidden mb-3">
        {/* Dates Row */}
        <div
          className="grid grid-cols-2 divide-x divide-gray-300 cursor-pointer hover:bg-gray-50"
          onClick={onDateClick}
        >
          <div className="p-3">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Check-in
            </p>
            <p className="text-sm text-gray-900">{fmt(checkIn)}</p>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
              Check-out
            </p>
            <p className="text-sm text-gray-900">{fmt(checkOut)}</p>
          </div>
        </div>

        {/* Guest Row */}
        <div
          className="border-t border-gray-300 p-3 cursor-pointer hover:bg-gray-50 relative"
          onClick={() => setShowGuestPicker(!showGuestPicker)}
        >
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Tamu
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-900">{guests} tamu</p>
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform ${
                showGuestPicker ? "rotate-180" : ""
              }`}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M6 12l10 10 10-10" />
            </svg>
          </div>

          {/* Guest Picker Dropdown */}
          {showGuestPicker && (
            <div
              className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Tamu</p>
                  <p className="text-gray-500 text-xs">Berapa orang yang menginap?</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onGuestChange(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-gray-800 disabled:opacity-30"
                    disabled={guests <= 1}
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-medium">{guests}</span>
                  <button
                    onClick={() => onGuestChange(Math.min(12, guests + 1))}
                    className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-gray-800 disabled:opacity-30"
                    disabled={guests >= 12}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="mt-3 text-sm font-semibold underline text-gray-700 w-full text-right"
                onClick={() => setShowGuestPicker(false)}
              >
                Tutup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Book Button */}
      <button className="w-full py-3 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-[#E61E4D] to-[#BD1E59] hover:from-[#D91953] hover:to-[#B0184F] transition-all shadow-md">
        Pesan
      </button>
      <p className="text-center text-sm text-gray-500 mt-2">
        Anda belum dikenakan biaya
      </p>

      {/* Price Breakdown */}
      <div className="mt-5 space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">
            {fmtPrice(PRICE_PER_NIGHT)} × {nights} malam
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

      {/* Free cancel note */}
      <p className="mt-4 text-center text-sm text-gray-500 bg-gray-50 rounded-lg py-2">
        🎉 Pembatalan gratis sebelum 3 Mei
      </p>
    </div>
  );
};

export default BookingCard;