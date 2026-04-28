import { useState } from "react";
import type { DateRange } from "../../types/search";

const DAYS_ID = ["Min", "Sn", "Sl", "R", "Km", "J", "Sb"];
const MONTHS_ID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

interface DatePanelProps {
  dateRange: DateRange;
  onChange: (range: DateRange) => void;
  onDone: () => void;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function DatePanel({ dateRange, onChange, onDone }: DatePanelProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selecting, setSelecting] = useState<"from" | "to">("from");
  const [mode, setMode] = useState<"tanggal" | "fleksibel">("tanggal");

  const leftYear = viewYear;
  const leftMonth = viewMonth;
  const rightMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const rightYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const handleDayClick = (year: number, month: number, day: number) => {
    const clicked = new Date(year, month, day);
    if (clicked < today) return;

    if (selecting === "from" || !dateRange.from) {
      onChange({ from: clicked, to: null });
      setSelecting("to");
    } else {
      if (clicked <= dateRange.from) {
        onChange({ from: clicked, to: null });
        setSelecting("to");
      } else {
        onChange({ from: dateRange.from, to: clicked });
        setSelecting("from");
        // Geser ke peserta setelah pilih range
        setTimeout(() => onDone(), 300);
      }
    }
  };

  const formatDate = (d: Date | null) =>
    d
      ? d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
      : "Tanggal pasti";

  const renderMonth = (year: number, month: number) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const totalDays = getDaysInMonth(year, month);
    const cells: (number | null)[] = [...Array(firstDay).fill(null)];
    for (let d = 1; d <= totalDays; d++) cells.push(d);

    return (
      <div className="flex-1 min-w-0">
        <p className="text-center text-sm font-semibold text-[#222222] mb-5">
          {MONTHS_ID[month]} {year}
        </p>
        {/* Header hari */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS_ID.map((d) => (
            <div key={d} className="flex items-center justify-center">
              <span className="text-xs font-medium text-[#717171]">{d}</span>
            </div>
          ))}
        </div>
        {/* Grid hari */}
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            if (!day) return <div key={`e-${i}`} className="h-10" />;

            const date = new Date(year, month, day);
            const isPast = date < today;
            const isFrom = !!(dateRange.from && isSameDay(date, dateRange.from));
            const isTo = !!(dateRange.to && isSameDay(date, dateRange.to));
            const isInRange = !!(
              dateRange.from &&
              dateRange.to &&
              date > dateRange.from &&
              date < dateRange.to
            );
            const isToday = isSameDay(date, today);

            // Background range highlight (full width baris, kecuali ujung)
            // const rangeLeft = isInRange || isTo;
            // const rangeRight = isInRange || isFrom;

            return (
              <div
                key={day}
                className={`relative h-10 flex items-center justify-center
                  ${isInRange ? "bg-[#F7F7F7]" : ""}
                  ${isFrom && dateRange.to ? "[background:linear-gradient(to_right,transparent_50%,#F7F7F7_50%)]" : ""}
                  ${isTo ? "[background:linear-gradient(to_left,transparent_50%,#F7F7F7_50%)]" : ""}
                `}
              >
                <button
                  type="button"
                  disabled={isPast}
                  onClick={() => handleDayClick(year, month, day)}
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center text-sm z-10 relative
                    transition-colors duration-150
                    ${isPast ? "text-[#CCCCCC] cursor-not-allowed" : "cursor-pointer"}
                    ${
                      isFrom || isTo
                        ? "bg-[#222222] text-white font-semibold"
                        : isToday
                          ? "font-bold text-[#222222] hover:border hover:border-[#222222]"
                          : !isPast
                            ? "text-[#222222] hover:border hover:border-[#222222]"
                            : ""
                    }
                  `}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-[#F7F7F7] rounded-full p-1 gap-1">
          {(["tanggal", "fleksibel"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                mode === m
                  ? "bg-white shadow text-[#222222]"
                  : "text-[#717171] hover:text-[#222222]"
              }`}
            >
              {m === "tanggal" ? "Tanggal" : "Fleksibel"}
            </button>
          ))}
        </div>
      </div>

      {/* Dual Calendar */}
      <div className="relative flex gap-10 px-4">
        <button
          type="button"
          onClick={prevMonth}
          className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center hover:bg-[#F7F7F7] rounded-full text-lg z-10 transition-colors"
        >
          ‹
        </button>
        {renderMonth(leftYear, leftMonth)}
        <div className="w-px bg-[#EBEBEB] shrink-0" />
        {renderMonth(rightYear, rightMonth)}
        <button
          type="button"
          onClick={nextMonth}
          className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center hover:bg-[#F7F7F7] rounded-full text-lg z-10 transition-colors"
        >
          ›
        </button>
      </div>

      {/* Footer Check-in / Check-out */}
      <div className="flex gap-3 mt-6 pt-5 border-t border-[#EBEBEB]">
        <button
          type="button"
          onClick={() => setSelecting("from")}
          className={`flex-1 border rounded-xl px-4 py-3 text-left transition-colors ${
            selecting === "from" ? "border-[#222222]" : "border-[#DDDDDD] hover:border-[#AAAAAA]"
          }`}
        >
          <p className="text-xs text-[#717171] font-semibold mb-0.5">Check-in</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#222222]">{formatDate(dateRange.from)}</p>
            <span className="text-[#717171] text-xs">⌄</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => setSelecting("to")}
          className={`flex-1 border rounded-xl px-4 py-3 text-left transition-colors ${
            selecting === "to" ? "border-[#222222]" : "border-[#DDDDDD] hover:border-[#AAAAAA]"
          }`}
        >
          <p className="text-xs text-[#717171] font-semibold mb-0.5">Check-out</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#222222]">{formatDate(dateRange.to)}</p>
            <span className="text-[#717171] text-xs">⌄</span>
          </div>
        </button>
      </div>
    </div>
  );
}
