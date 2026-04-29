// src/components/rooms/NearbyRooms.tsx
import { useRef } from "react";
import ExperienceCard from "../experiences/ExperienceCard";
import type { Experience } from "../../types/experience";

const NEARBY: Experience[] = [
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
    badge: "Pilihan tamu",
    title: "JR Homestay 149 @6th Mile Landed House Dekat Farley",
    subtitle: "Kuching, Malaysia",
    rating: 5.0,
    price: "Rp2.842.588 malam",
    isFavorite: false,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    badge: "Pilihan tamu",
    title: "Muji Suite di Kenny Hill Residences Dekat BMC",
    subtitle: "Kuching, Malaysia",
    rating: 4.9,
    price: "Rp1.068.365 malam",
    isFavorite: false,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "Pilihan tamu",
    title: "3008 The Echelon Apartment Kuching Dekat Bandara",
    subtitle: "Kuching, Malaysia",
    rating: 5.0,
    price: "Rp603.890 malam",
    isFavorite: false,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
    badge: "Pilihan tamu",
    title: "3BR Podium 7pax Menawan di seberang Aeon 27",
    subtitle: "Kuching, Malaysia",
    rating: 4.94,
    price: "Rp1.172.213 malam",
    isFavorite: false,
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
    badge: "Pilihan tamu",
    title: "Urbanstay@podium",
    subtitle: "Kuching, Malaysia",
    rating: 4.8,
    price: "Rp567.751 malam",
    isFavorite: false,
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400",
    badge: "Pilihan tamu",
    title: "Vista Garden Suite dekat Waterfront Kuching",
    subtitle: "Kuching, Malaysia",
    rating: 4.87,
    price: "Rp890.000 malam",
    isFavorite: false,
  },
];

const NearbyRooms = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Penginapan lainnya di sekitar</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">1 / 2</span>
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {NEARBY.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default NearbyRooms;
