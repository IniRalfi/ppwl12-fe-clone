import { useState } from "react";
import { Link } from "react-router-dom";
import type { Experience } from "../../types/experience";

interface Props {
  data: Experience;
}

export default function ExperienceCard({ data }: Props) {
  const [isFav, setIsFav] = useState(data.isFavorite ?? false);

  return (
    // Pake Link biar pindah halaman otomatis ke /listing/ID
    <Link to={`/listing/${data.id}`} className="w-44 shrink-0 cursor-pointer group block">
      {/* Gambar */}
      <div className="relative rounded-2xl overflow-hidden aspect-square">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge pojok kiri atas */}
        {data.badge && (
          <span
            className="absolute top-2 left-2 bg-white text-black 
          text-xs font-medium px-2 py-1 rounded-full shadow-sm z-10"
          >
            {data.badge}
          </span>
        )}

        {/* Tombol ❤️ pojok kanan atas */}
        <button
          onClick={(e) => {
            e.preventDefault(); // Biar pas klik lope doang, halamannya nggak ikut pindah
            setIsFav(!isFav);
          }}
          className="absolute top-2 right-2 text-lg z-10 hover:scale-110 transition-transform"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Teks di BAWAH gambar */}
      <div className="mt-2 px-1">
        <h3 className="font-semibold text-sm text-gray-900 truncate">{data.title}</h3>
        <p className="text-xs text-gray-500 truncate mt-0.5">{data.subtitle}</p>
        <p className="text-sm font-semibold text-gray-900 mt-1">
          {data.price.split(" ")[0]} <span className="font-normal text-gray-500">malam</span>
        </p>
        <p className="text-xs font-semibold text-gray-900 mt-1 flex items-center gap-1">
          <span>★</span> {data.rating}
        </p>
      </div>
    </Link>
  );
}
