import ExperienceCard from "./ExperienceCard";
import type { Experience } from "../../types/experience";

interface Props {
  title: string;
  data: Experience[];
}

export default function ExperienceSection({ title, data }: Props) {
  return (
    <div className="py-6 px-4">

      {/* Judul Section + Tombol Navigasi */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {title} →
        </h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            ←
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      {/* Deretan Kartu - Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {data.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
      </div>

    </div>
  );
}