import { useState } from "react";
import { suggestedDestinations } from "../../data/destinations";

interface LocationPanelProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationPanel({ value, onChange }: LocationPanelProps) {
  const [query, setQuery] = useState(value);

  const filtered = query.trim()
    ? suggestedDestinations.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
    : suggestedDestinations;

  return (
    <div className="p-4">
      {/* Search input di dalam panel */}
      <input
        type="text"
        autoFocus
        placeholder="Cari destinasi"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 mb-4 border border-[#DDDDDD] rounded-full text-sm text-[#222222] placeholder:text-[#717171] outline-none focus:border-[#222222] transition-colors"
      />

      {/* List destinasi */}
      <p className="text-xs font-semibold text-[#222222] px-2 mb-3">Destinasi yang disarankan</p>
      <ul className="space-y-1 max-h-80 overflow-y-auto">
        {filtered.map((dest) => (
          <li key={dest.id}>
            <button
              type="button"
              onClick={() => onChange(dest.name)}
              className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-[#F7F7F7] transition-colors text-left"
            >
              {/* Ikon */}
              <div className="w-12 h-12 rounded-xl bg-[#F7F7F7] border border-[#DDDDDD] flex items-center justify-center text-2xl shrink-0">
                {dest.emoji}
              </div>
              {/* Teks */}
              <div>
                <p className="text-sm font-semibold text-[#222222]">{dest.name}</p>
                <p className="text-sm text-[#717171] leading-snug">{dest.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
