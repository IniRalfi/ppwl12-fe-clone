import { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import type { CitySection } from "../../types/experience";

interface Props {
  homesData: CitySection[];
  experiencesData: CitySection[];
  servicesData: CitySection[];
}

export default function ExperienceSection({
  homesData,
  experiencesData,
  servicesData,
}: Props) {
  const [activeTab, setActiveTab] = useState("homes");

  const activeData =
    activeTab === "homes"
      ? homesData
      : activeTab === "experiences"
      ? experiencesData
      : servicesData;

  return (
    <div className="py-6 px-4">

      {/* Tab Navigasi */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        {[
          { key: "homes", label: "🏠 Homes" },
          { key: "experiences", label: "🎈 Experiences" },
          { key: "services", label: "🔔 Services" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 text-sm font-semibold transition-all ${
              activeTab === tab.key
                ? "border-b-2 border-black text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 10 Section Per Kota - Scroll ke Bawah */}
      <div className="space-y-10">
        {activeData.map((citySection) => (
          <CityRow key={citySection.city} citySection={citySection} />
        ))}
      </div>

    </div>
  );
}

// Komponen per baris kota
function CityRow({ citySection }: { citySection: CitySection }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -192, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 192, behavior: "smooth" });
  };

  return (
    <div>
      {/* Judul Kota + Tombol Navigasi */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Penginapan populer di {citySection.city} →
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>

      {/* Deretan Kartu + Lihat Semua */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {citySection.data.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}

        {/* Card Lihat Semua */}
        <div className="w-44 shrink-0 cursor-pointer">
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
              {citySection.data.slice(0, 4).map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="mt-2 px-1">
            <h3 className="font-semibold text-sm text-gray-900">
              Lihat semua
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}