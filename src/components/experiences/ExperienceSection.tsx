import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import type { Experience } from "../../types/experience";

// Props: menerima data untuk ketiga tab sekaligus
interface Props {
  homesData: Experience[];
  experiencesData: Experience[];
  servicesData: Experience[];
}

export default function ExperienceSection({
  homesData,
  experiencesData,
  servicesData,
}: Props) {
  // State untuk menyimpan tab yang aktif
  const [activeTab, setActiveTab] = useState("homes");

  // Tentukan data mana yang ditampilkan berdasarkan tab aktif
  const activeData =
    activeTab === "homes"
      ? homesData
      : activeTab === "experiences"
      ? experiencesData
      : servicesData;

  // Tentukan judul section berdasarkan tab aktif
  const activeTitle =
    activeTab === "homes"
      ? "Penginapan populer"
      : activeTab === "experiences"
      ? "Experiences"
      : "Services";

  return (
    <div className="py-6 px-4">

      {/* Tab Navigasi: Homes / Experiences / Services */}
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

      {/* Judul Section + Tombol Navigasi */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {activeTitle} →
        </h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 
          hover:bg-gray-100">
            ←
          </button>
          <button className="p-2 rounded-full border border-gray-300 
          hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      {/* Deretan Kartu - Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {activeData.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
      </div>

    </div>
  );
}