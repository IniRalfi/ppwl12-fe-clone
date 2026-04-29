// src/components/listing/Amenities.tsx
import { useState } from "react";

const amenities = [
  { icon: "🍳", label: "Dapur", available: true },
  { icon: "📶", label: "Wifi", available: true },
  { icon: "💼", label: "Area kerja khusus", available: true },
  { icon: "🏊", label: "Kolam renang", available: true },
  { icon: "📺", label: "TV", available: true },
  { icon: "🛗", label: "Lift", available: true },
  { icon: "❄️", label: "AC", available: true },
  { icon: "🅿️", label: "Parkir gratis", available: true },
  { icon: "🧺", label: "Mesin cuci", available: false },
  { icon: "🛁", label: "Bathtub", available: false },
];

const Amenities = () => {
  const [showAll, setShowAll] = useState(false);

  const available = amenities.filter((a) => a.available);
  const unavailable = amenities.filter((a) => !a.available);
  const displayed = showAll ? available : available.slice(0, 6);

  return (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Yang ditawarkan tempat ini
      </h2>

      {/* Available */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {displayed.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-700">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Unavailable */}
      {showAll && unavailable.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-500 mb-2">
            Tidak tersedia di tempat ini
          </p>
          <div className="grid grid-cols-2 gap-3">
            {unavailable.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400">
                <span className="text-xl line-through">{item.icon}</span>
                <span className="text-sm line-through">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-5 px-6 py-3 border border-gray-800 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {showAll
          ? "Sembunyikan fasilitas"
          : `Tampilkan semua ${amenities.length} fasilitas`}
      </button>
    </div>
  );
};

export default Amenities;