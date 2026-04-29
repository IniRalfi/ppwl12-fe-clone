// src/components/listing/DatePicker.tsx
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { id } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  checkIn: Date;
  checkOut: Date;
  onChange: (start: Date, end: Date) => void;
}

const DatePickerSection = ({ checkIn, checkOut, onChange }: DatePickerProps) => {
  const handleSelect = (ranges: any) => {
    const { selection } = ranges;
    onChange(selection.startDate, selection.endDate);
  };

  return (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Pilih tanggal menginap
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Tambahkan tanggal perjalanan untuk harga yang akurat
      </p>

      <div className="overflow-x-auto">
        <DateRange
          ranges={[
            {
              startDate: checkIn,
              endDate: checkOut,
              key: "selection",
            },
          ]}
          onChange={handleSelect}
          months={2}
          direction="horizontal"
          minDate={new Date()}
          maxDate={addDays(new Date(), 365)}
          locale={id}
          rangeColors={["#FF385C"]}
          showDateDisplay={false}
          showMonthAndYearPickers={false}
          className="font-sans!"
        />
      </div>

      <button
        onClick={() => onChange(new Date(), addDays(new Date(), 1))}
        className="mt-2 text-sm font-semibold underline text-gray-800 hover:text-gray-600"
      >
        Kosongkan tanggal
      </button>
    </div>
  );
};

export default DatePickerSection;