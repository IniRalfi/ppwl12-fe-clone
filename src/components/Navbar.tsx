import { useRef, useState } from "react";
import { Globe, Menu, Search, User } from "lucide-react";
import { Logo } from "./Logo";
import type { ActivePanel } from "../types/search";

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

interface NavbarProps {
  isScrolled: boolean;
  onSectionClick: (panel: ActivePanel) => void;
}

export default function Navbar({ isScrolled, onSectionClick }: NavbarProps) {
  const [activeTab, setActiveTab] = useState<NavTab>("homes");
  const headerRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleMouseEnter = (id: string) => videoRefs.current[id]?.play();
  const handleMouseLeave = (id: string) => {
    const v = videoRefs.current[id];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "border-b border-[#DDDDDD] shadow-sm" : ""
      }`}
    >
      {/* ════ DESKTOP ════ */}
      <div className="hidden md:grid max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 grid-cols-3 items-center h-20">
        {/* Kolom 1: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center text-[#FF385C]" aria-label="Beranda">
            <Logo className="h-8 w-auto" />
          </a>
        </div>

        {/* Kolom 2: Tabs ↔ Compact pill */}
        <div className="relative flex items-center justify-center h-full">
          {/* Nav tabs */}
          <nav
            aria-label="Navigasi utama"
            className={`flex items-center justify-center h-full absolute inset-0 transition-all duration-300 ease-out ${
              isScrolled
                ? "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
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
                      ? "text-hof border-hof"
                      : "text-[#717171] border-transparent hover:text-hof hover:border-[#DDDDDD]"
                  }`}
                >
                  {item.isNew && (
                    <span className="absolute top-2 right-0 bg-[#FF385C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none tracking-wide">
                      BARU
                    </span>
                  )}
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
                  <span className="text-sm font-semibold leading-none whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Compact search pill */}
          <div
            className={`absolute transition-all duration-300 ease-out ${
              isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex items-center bg-white border border-[#DDDDDD] rounded-full shadow-md hover:shadow-lg transition-shadow">
              <button
                onClick={() => onSectionClick("location")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-l-full transition-colors hover:bg-[#F7F7F7]"
              >
                <span className="text-base">🏠</span>
                <span className="text-sm font-semibold text-hof whitespace-nowrap">
                  Ke mana saja
                </span>
              </button>
              <div className="w-px h-5 bg-[#DDDDDD] shrink-0" />
              <button
                onClick={() => onSectionClick("date")}
                className="px-4 py-2.5 transition-colors hover:bg-[#F7F7F7]"
              >
                <span className="text-sm font-semibold text-hof whitespace-nowrap">Kapan saja</span>
              </button>
              <div className="w-px h-5 bg-[#DDDDDD] shrink-0" />
              <button
                onClick={() => onSectionClick("guests")}
                className="px-4 py-2.5 transition-colors hover:bg-[#F7F7F7]"
              >
                <span className="text-sm font-semibold text-hof whitespace-nowrap">
                  Tambahkan tamu
                </span>
              </button>
              <button className="btn-rausch w-8 h-8 rounded-full flex items-center justify-center mr-2 ml-1 shrink-0">
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Kolom 3: Right */}
        <div className="flex items-center justify-end gap-1">
          <button className="hidden lg:block px-4 py-2 text-sm font-semibold text-hof hover:bg-[#F7F7F7] rounded-full transition-colors whitespace-nowrap">
            Menjadi Tuan Rumah
          </button>
          <button
            className="p-3 hover:bg-[#F7F7F7] rounded-full transition-colors"
            aria-label="Pilih bahasa"
          >
            <Globe className="w-5 h-5 text-hof" />
          </button>
          <button
            className="flex items-center gap-3 p-2 pl-3 border border-[#DDDDDD] rounded-full hover:shadow-md transition-shadow"
            aria-label="Menu akun"
          >
            <Menu className="w-4 h-4 text-hof" />
            <div className="w-8 h-8 bg-[#717171] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* ════ MOBILE ════ */}
      <div className="md:hidden">
        <div className="px-4 pt-3 pb-2">
          <button className="w-full bg-white border border-[#DDDDDD] rounded-full px-6 py-3.5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <Search className="w-5 h-5 text-[#717171] shrink-0" />
            <span className="text-base text-[#717171] font-medium">Mulai pencarian</span>
          </button>
        </div>
        <nav className="flex border-b border-[#DDDDDD]" aria-label="Navigasi mobile">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={`mob-${item.id}`}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`relative flex-1 flex flex-col items-center border-b-2 transition-colors duration-200 ${
                  isActive ? "text-hof border-hof" : "text-[#717171] border-transparent"
                }`}
              >
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out flex items-center justify-center ${
                    isScrolled ? "max-h-0 opacity-0 mt-0" : "max-h-20 opacity-100 mt-1"
                  }`}
                >
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    {item.isNew && (
                      <span className="absolute -top-1 -right-1 bg-[#FF385C] text-white text-[8px] font-bold px-1 py-0.5 rounded-full leading-none z-10">
                        BARU
                      </span>
                    )}
                    <video
                      ref={(el) => {
                        videoRefs.current[`mob-${item.id}`] = el;
                      }}
                      autoPlay={isActive}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src={item.webm} type="video/webm" />
                      <source src={item.mov} type="video/quicktime" />
                    </video>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold pb-2 transition-all duration-300 ${isScrolled ? "pt-2" : "pt-0.5"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
