"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function SearchBar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="w-full bg-white py-4 border-b border-gray-100">
      <div className="max-w-[850px] mx-auto px-4">
        <div
          className={`flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow ${
            activeSection ? "shadow-md" : ""
          }`}
        >
          {/* Location */}
          <button
            onClick={() => setActiveSection("location")}
            className={`flex-1 flex flex-col items-start px-6 py-3 rounded-full transition-colors ${
              activeSection === "location" ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <span className="text-xs font-semibold text-[#222222]">Lokasi</span>
            <span className="text-sm text-[#717171]">Cari destinasi</span>
          </button>

          <div className="w-px h-8 bg-gray-300" />

          {/* Check-in */}
          <button
            onClick={() => setActiveSection("checkin")}
            className={`flex-1 flex flex-col items-start px-6 py-3 rounded-full transition-colors ${
              activeSection === "checkin" ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <span className="text-xs font-semibold text-[#222222]">Kapan</span>
            <span className="text-sm text-[#717171]">Tambahkan tanggal</span>
          </button>

          <div className="w-px h-8 bg-gray-300" />

          {/* Guests */}
          <button
            onClick={() => setActiveSection("guests")}
            className={`flex-1 flex flex-col items-start px-6 py-3 rounded-full transition-colors ${
              activeSection === "guests" ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <span className="text-xs font-semibold text-[#222222]">Peserta</span>
            <span className="text-sm text-[#717171]">Tambahkan tamu</span>
          </button>

          {/* Search Button */}
          <button className="flex items-center justify-center w-12 h-12 mr-2 bg-[#FF385C] hover:bg-[#E31C5F] rounded-full transition-colors btn-press">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
