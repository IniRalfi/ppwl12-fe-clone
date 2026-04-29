// src/components/rooms/DatePicker.tsx

interface DatePickerProps {
  nights: number;
  startDate: number | null;
  endDate: number | null;
  currentMonthIndex: number;
  selecting: "checkin" | "checkout";
  months: string[];
  onDateClick: (day: number) => void;
  onClearDates: () => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  location?: string; // nama kota buat judul
}

const DatePickerSection = ({
  nights,
  startDate,
  endDate,
  currentMonthIndex,
  selecting,
  months,
  onDateClick,
  onClearDates,
  onPrevMonth,
  onNextMonth,
  location = "sini",
}: DatePickerProps) => {
  return (
    <div className="py-6 border-b border-gray-200">
      {/* Judul Dinamis */}
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        {nights > 0 ? `${nights} malam di ${location}` : "Pilih tanggal check-in"}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {startDate && endDate
          ? `${startDate} - ${endDate} ${months[currentMonthIndex]} 2026`
          : "Tambahkan tanggal perjalanan untuk melihat harga yang tepat"}
      </p>

      <div className="max-w-md">
        {/* Navigasi Bulan */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onPrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="text-lg font-bold">❮</span>
          </button>
          <p className="font-semibold text-gray-900 text-base">{months[currentMonthIndex]} 2026</p>
          <button
            onClick={onNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="text-lg font-bold">❯</span>
          </button>
        </div>

        {/* Header Hari */}
        <div className="grid grid-cols-7 text-center text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Grid Tanggal */}
        <div className="grid grid-cols-7 gap-1">
          {[...Array(31)].map((_, i) => {
            const day = i + 1;
            const isSelected = day === startDate || day === endDate;
            const isInRange = startDate && endDate && day > startDate && day < endDate;
            const isSelectingStart = selecting === "checkin";

            return (
              <button
                key={day}
                onClick={() => onDateClick(day)}
                title={isSelectingStart ? "Pilih tanggal check-in" : "Pilih tanggal check-out"}
                className={`aspect-square flex items-center justify-center text-sm font-semibold transition-all duration-200
                  ${isSelected ? "bg-black text-white rounded-full shadow-lg" : "rounded-full"}
                  ${isInRange ? "bg-gray-100 text-black" : ""}
                  ${!isSelected && !isInRange ? "text-gray-800 hover:bg-gray-100 hover:ring-1 hover:ring-black" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Clear Button */}
        <div className="flex justify-end mt-5">
          <button
            onClick={onClearDates}
            className="text-sm font-semibold underline text-gray-800 hover:text-black p-2 transition-colors"
          >
            Kosongkan tanggal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerSection;
