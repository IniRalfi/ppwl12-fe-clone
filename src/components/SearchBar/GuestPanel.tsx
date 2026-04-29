import type { GuestCount } from "../../types/search";

interface GuestPanelProps {
  guests: GuestCount;
  onChange: (guests: GuestCount) => void;
}

interface GuestRowProps {
  label: string;
  description: string;
  value: number;
  min?: number;
  onDecrement: () => void;
  onIncrement: () => void;
  link?: string;
}

function GuestRow({
  label,
  description,
  value,
  min = 0,
  onDecrement,
  onIncrement,
  link,
}: GuestRowProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#DDDDDD] last:border-none">
      <div>
        <p className="text-sm font-semibold text-hof">{label}</p>
        {link ? (
          <a href="#" className="text-sm text-hof underline">
            {description}
          </a>
        ) : (
          <p className="text-sm text-[#717171]">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-[#717171] flex items-center justify-center text-[#717171] hover:border-hof hover:text-hof disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg"
        >
          −
        </button>
        <span className="w-4 text-center text-sm font-medium text-hof">{value}</span>
        <button
          type="button"
          onClick={onIncrement}
          className="w-8 h-8 rounded-full border border-[#717171] flex items-center justify-center text-[#717171] hover:border-hof hover:text-hof transition-colors text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function GuestPanel({ guests, onChange }: GuestPanelProps) {
  const update = (key: keyof GuestCount, delta: number) => {
    onChange({ ...guests, [key]: Math.max(0, guests[key] + delta) });
  };

  return (
    <div className="p-4">
      <GuestRow
        label="Dewasa"
        description="Usia 13 tahun ke atas"
        value={guests.adults}
        onDecrement={() => update("adults", -1)}
        onIncrement={() => update("adults", 1)}
      />
      <GuestRow
        label="Anak-anak"
        description="Usia 2–12"
        value={guests.children}
        onDecrement={() => update("children", -1)}
        onIncrement={() => update("children", 1)}
      />
      <GuestRow
        label="Balita"
        description="Di bawah 2 tahun"
        value={guests.infants}
        onDecrement={() => update("infants", -1)}
        onIncrement={() => update("infants", 1)}
      />
      <GuestRow
        label="Hewan peliharaan"
        description="Membawa hewan pemandu?"
        value={guests.pets}
        onDecrement={() => update("pets", -1)}
        onIncrement={() => update("pets", 1)}
        link="Membawa hewan pemandu?"
      />
    </div>
  );
}
