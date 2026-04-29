import { useState } from "react";
import type { Experience } from "../../types/experience";

interface Props {
  data: Experience;
}

export default function ExperienceCard({ data }: Props) {
  const [isFav, setIsFav] = useState(data.isFavorite ?? false);

  return (
    <div className="w-44 shrink-0 cursor-pointer group">

      {/* Gambar */}
      <div className="relative rounded-2xl overflow-hidden aspect-square">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />

        {/* Badge pojok kiri atas */}
        {data.badge && (
          <span className="absolute top-2 left-2 bg-white text-black 
          text-xs font-medium px-2 py-1 rounded-full shadow-sm">
            {data.badge}
          </span>
        )}

        {/* Tombol ❤️ pojok kanan atas */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-2 right-2 text-lg"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Teks di BAWAH gambar */}
      <div className="mt-2 px-1">
        <h3 className="font-semibold text-sm text-gray-900 truncate">
          {data.title}
        </h3>
        <p className="text-xs text-gray-500 truncate">
          {data.subtitle}
        </p>
        <p className="text-xs text-gray-700 mt-1">
          {data.price} · ★ {data.rating}
        </p>
      </div>

    </div>
  );
}