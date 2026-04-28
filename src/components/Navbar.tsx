import { useState, useRef } from "react";
import { Globe, Menu, User } from "lucide-react";
import { Logo } from "./Logo";

import houseWebm from "../assets/house-selected.webm";
import balloonWebm from "../assets/balloon-selected.webm";
import conciergeWebm from "../assets/consierge-selected.webm";
import houseMov from "../assets/house-selected.mov";
import balloonMov from "../assets/balloon-selected.mov";
import conciergeMov from "../assets/consierge-selected.mov";

type NavTab = "homes" | "experiences" | "services";

interface NavItem {
  id: NavTab;
  label: string;
  webm: string;
  mov: string;
  isNew?: boolean;
}

const navItems: NavItem[] = [
  { id: "homes", label: "Homes", webm: houseWebm, mov: houseMov },
  { id: "experiences", label: "Experiences", webm: balloonWebm, mov: balloonMov, isNew: true },
  { id: "services", label: "Services", webm: conciergeWebm, mov: conciergeMov, isNew: true },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<NavTab>("homes");
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleMouseEnter = (id: string) => {
    videoRefs.current[id]?.play();
  };

  const handleMouseLeave = (id: string) => {
    const v = videoRefs.current[id];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DDDDDD]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-3 items-center h-20">
        {/* Kolom 1: Logo — rata kiri */}
        <div className="flex items-center">
          <a href="/" className="flex items-center text-[#FF385C]" aria-label="Beranda">
            <Logo className="h-8 w-auto" />
          </a>
        </div>

        {/* Kolom 2: Nav — murni di tengah */}
        <nav
          className="hidden md:flex items-center justify-center h-full"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                className={`group relative flex flex-row items-center gap-2 px-4 h-full border-b-2 transition-colors ${
                  isActive
                    ? "text-[#222222] border-[#222222]"
                    : "text-[#717171] border-transparent hover:text-[#222222] hover:border-[#DDDDDD]"
                }`}
              >
                {/* Badge BARU */}
                {item.isNew && (
                  <span className="absolute top-2 right-0 bg-[#FF385C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none tracking-wide">
                    BARU
                  </span>
                )}

                {/* Video — freeze default, scale + play on hover */}
                <div className="w-16 h-16 flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-125">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src={item.webm} type="video/webm" />
                    <source src={item.mov} type="video/quicktime" />
                  </video>
                </div>

                {/* Label */}
                <span className="text-sm font-semibold leading-none whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Kolom 3: Right Actions — rata kanan */}
        <div className="flex items-center justify-end gap-1">
          <button className="hidden lg:block px-4 py-2 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] rounded-full transition-colors whitespace-nowrap">
            Menjadi Tuan Rumah
          </button>
          <button
            className="p-3 hover:bg-[#F7F7F7] rounded-full transition-colors"
            aria-label="Pilih bahasa"
          >
            <Globe className="w-5 h-5 text-[#222222]" />
          </button>
          <button
            className="flex items-center gap-3 p-2 pl-3 border border-[#DDDDDD] rounded-full hover:shadow-md transition-shadow"
            aria-label="Menu akun"
          >
            <Menu className="w-4 h-4 text-[#222222]" />
            <div className="w-8 h-8 bg-[#717171] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
