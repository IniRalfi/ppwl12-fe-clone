import { useState } from "react";
import type { Experience } from "../../types/experience";

interface Props {
  data: Experience;
}

export default function ExperienceCard({ data }: Props) {
  const [isFav, setIsFav] = useState(data.isFavorite ?? false);

  return (
    <div className="w-64 flex-shrink-0 cursor-pointer group">
      {/* Gambar */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {data.badge && (
          <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
            {data.badge}
          </span>
        )}

        {/* Tombol Favorit ❤️ */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-3 right-3"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Info Kartu */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm text-gray-900 truncate">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500">{data.subtitle}</p>
        <p className="text-sm text-gray-700 mt-1">
          {data.price} · ★ {data.rating}
        </p>
      </div>
    </div>
  );
}