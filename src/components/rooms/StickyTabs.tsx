import { useEffect, useState, type RefObject } from "react";

interface StickyTabsProps {
  galleryRef?: RefObject<HTMLDivElement | null>;
}

export default function StickyTabs({ galleryRef }: StickyTabsProps) {
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    // Kalau ada ref gallery, pakai IntersectionObserver
    if (galleryRef?.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // StickyTabs muncul pas gallery keluar dari viewport
          setShowTabs(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "0px" },
      );
      observer.observe(galleryRef.current);
      return () => observer.disconnect();
    }

    // Fallback: pakai scroll biasa kalau gak ada ref
    const handleScroll = () => setShowTabs(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [galleryRef]);

  if (!showTabs) return null;

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex gap-8 px-4 py-5">
        {["Foto", "Fasilitas", "Ulasan", "Lokasi"].map((tab) => (
          <button
            key={tab}
            className="text-sm font-semibold text-gray-700 hover:text-black pb-1 border-b-2 border-transparent hover:border-black transition-all"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
