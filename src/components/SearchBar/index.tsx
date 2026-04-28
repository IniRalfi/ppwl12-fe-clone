import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import type { ActivePanel, DateRange, GuestCount } from "../../types/search";
import LocationPanel from "./LocationPanel";
import DatePanel from "./DatePanel";
import GuestPanel from "./GuestPanel";

export default function SearchBar() {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({ from: null, to: null });
  const [guests, setGuests] = useState<GuestCount>({ adults: 0, children: 0, infants: 0, pets: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Tutup panel kalau klik di luar
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActivePanel(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const isExpanded = activePanel !== null;

  const formatDate = (d: Date | null) =>
    d ? d.toLocaleDateString("id-ID", { day: "numeric", month: "short" }) : null;

  const totalGuests = guests.adults + guests.children + guests.infants;
  const guestLabel =
    totalGuests > 0
      ? `${totalGuests} tamu${guests.pets > 0 ? `, ${guests.pets} hewan` : ""}`
      : null;
  const dateLabel = dateRange.from
    ? `${formatDate(dateRange.from)}${dateRange.to ? ` – ${formatDate(dateRange.to)}` : ""}`
    : null;

  const toggle = (panel: Exclude<ActivePanel, null>) =>
    setActivePanel((prev) => (prev === panel ? null : panel));

  const sectionClass = (panel: Exclude<ActivePanel, null>) =>
    `flex flex-col items-start px-6 py-3 rounded-full transition-all cursor-pointer ${
      activePanel === panel
        ? "bg-white shadow-md"
        : isExpanded
          ? "hover:bg-[#EBEBEB]"
          : "hover:bg-[#F7F7F7]"
    }`;

  const labelClass = (panel: Exclude<ActivePanel, null>) =>
    `text-xs font-semibold leading-none mb-0.5 transition-colors ${
      !isExpanded || activePanel === panel ? "text-[#222222]" : "text-[#AAAAAA]"
    }`;

  const valueClass = (panel: Exclude<ActivePanel, null>, hasValue: boolean) =>
    `text-sm truncate transition-colors ${
      !isExpanded || activePanel === panel
        ? hasValue
          ? "text-[#222222]"
          : "text-[#717171]"
        : "text-[#AAAAAA]"
    }`;

  // Helper buat panel wrapper — selalu render, toggle visibilitas via CSS
  const panelWrapperClass = (panel: ActivePanel, extra = "") =>
    `absolute top-full mt-3 z-50 transition-all duration-200 ease-out ${extra} ${
      activePanel === panel
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }`;

  return (
    // sticky di bawah Navbar (h-20 = 5rem), biar popup tidak ikut scroll
    <div className="sticky top-20 z-40 w-full bg-white border-b border-[#DDDDDD] py-3">
      <div ref={containerRef} className="relative max-w-2xl mx-auto px-4">
        {/* Bar Utama */}
        <div
          className={`flex items-center rounded-full border transition-all duration-200 ${
            isExpanded
              ? "border-[#DDDDDD] shadow-lg bg-[#F7F7F7]"
              : "border-[#DDDDDD] shadow-sm hover:shadow-md bg-white"
          }`}
        >
          {/* Lokasi */}
          <button
            type="button"
            onClick={() => toggle("location")}
            className={`flex-1 ${sectionClass("location")}`}
          >
            <span className={labelClass("location")}>Lokasi</span>
            <span className={valueClass("location", !!location)}>
              {location || "Cari destinasi"}
            </span>
          </button>

          {!(activePanel === "location" || activePanel === "date") && (
            <div className="w-px h-7 bg-[#DDDDDD] shrink-0" />
          )}

          {/* Kapan */}
          <button
            type="button"
            onClick={() => toggle("date")}
            className={`flex-1 ${sectionClass("date")}`}
          >
            <span className={labelClass("date")}>Kapan</span>
            <span className={valueClass("date", !!dateLabel)}>
              {dateLabel || "Tambahkan tanggal"}
            </span>
          </button>

          {!(activePanel === "date" || activePanel === "guests") && (
            <div className="w-px h-7 bg-[#DDDDDD] shrink-0" />
          )}

          {/* Peserta + Search */}
          <div className="flex items-center pr-2">
            <button
              type="button"
              onClick={() => toggle("guests")}
              className={sectionClass("guests")}
            >
              <span className={labelClass("guests")}>Peserta</span>
              <span className={valueClass("guests", !!guestLabel)}>
                {guestLabel || "Tambahkan tamu"}
              </span>
            </button>
            <button
              type="button"
              className="btn-rausch w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              aria-label="Cari"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* ── Panel Lokasi ── selalu render, animasi CSS */}
        <div className={panelWrapperClass("location", "left-0 right-0")}>
          <div className="bg-white rounded-[1.5rem] shadow-2xl border border-[#DDDDDD]">
            <LocationPanel
              value={location}
              onChange={(val) => {
                setLocation(val);
                // geser ke date, JANGAN tutup
                setActivePanel("date");
              }}
            />
          </div>
        </div>

        {/* ── Panel Tanggal ── lebih lebar, di-center */}
        <div
          className={panelWrapperClass("date", "left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw]")}
        >
          <div className="bg-white rounded-[1.5rem] shadow-2xl border border-[#DDDDDD]">
            <DatePanel
              dateRange={dateRange}
              onChange={setDateRange}
              onDone={() => setActivePanel("guests")}
            />
          </div>
        </div>

        {/* ── Panel Peserta ── rata kanan */}
        <div className={panelWrapperClass("guests", "right-0 w-80")}>
          <div className="bg-white rounded-[1.5rem] shadow-2xl border border-[#DDDDDD]">
            <GuestPanel guests={guests} onChange={setGuests} />
          </div>
        </div>
      </div>
    </div>
  );
}
