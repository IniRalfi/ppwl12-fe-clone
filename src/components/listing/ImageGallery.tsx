// src/components/listing/ImageGallery.tsx
import { useState, forwardRef } from "react";
import type { ListingImageProps } from "@/types/listing";

const ImageGallery = forwardRef<HTMLDivElement, ListingImageProps>(function ImageGallery(
  { images },
  ref,
) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setShowGallery(true);
  };

  return (
    <>
      {/* ref dipasang di sini buat IntersectionObserver dari luar */}
      <div ref={ref} className="max-w-6xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[480px] shadow-sm">
          {/* Gambar Utama (Kiri Besar) */}
          <div
            className="col-span-2 row-span-2 cursor-pointer overflow-hidden"
            onClick={() => openGallery(0)}
          >
            <img
              src={images[0]}
              alt="Foto utama"
              className="w-full h-full object-cover hover:brightness-90 transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* 4 Gambar Kecil (Kanan) */}
          {images.slice(1, 5).map((img, index) => (
            <div
              key={index}
              className="cursor-pointer relative overflow-hidden group"
              onClick={() => openGallery(index + 1)}
            >
              <img
                src={img}
                alt={`Foto ${index + 2}`}
                className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300 group-hover:scale-105"
              />
              {index === 3 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openGallery(0);
                  }}
                  className="absolute bottom-3 right-3 bg-white border border-gray-800 rounded-lg px-3 py-1.5 font-semibold text-sm shadow-md hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  ⠿ Tampilkan semua foto
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen */}
      {showGallery && (
        <div className="fixed inset-0 bg-white z-999 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <button
              onClick={() => setShowGallery(false)}
              className="flex items-center gap-2 text-sm font-semibold hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              ← Kembali
            </button>
            <span className="text-sm font-semibold text-gray-600">{images.length} foto</span>
          </div>
          <div className="max-w-4xl mx-auto py-8 px-6 flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                  i === activeIndex ? "ring-2 ring-black" : ""
                }`}
              >
                <img src={img} alt={`Foto ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default ImageGallery;
