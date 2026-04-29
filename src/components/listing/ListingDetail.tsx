// src/components/listing/ListingDetail.tsx
import { useState } from "react";
import { addDays } from "date-fns";
import HostInfo from "./HostInfo";
import ListingDescription from "./ListingDescription";
import Amenities from "./Amenities";
import BookingCard from "./BookingCard";
import DatePickerSection from "./DatePicker";

const ListingDetail = () => {
  const [checkIn, setCheckIn] = useState(addDays(new Date(), 10));
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 12));
  const [guests, setGuests] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (start: Date, end: Date) => {
    setCheckIn(start);
    setCheckOut(end);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Seluruh unit sewaan di Kuala Lumpur, Malaysia
        </h1>
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
          <span>⭐ 4,96</span>
          <span>·</span>
          <span className="underline font-medium cursor-pointer">56 Ulasan</span>
          <span>·</span>
          <span className="underline font-medium cursor-pointer">Kuala Lumpur, Malaysia</span>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-600">
          <span>12 tamu</span>
          <span>·</span>
          <span>3 kamar tidur</span>
          <span>·</span>
          <span>5 tempat tidur</span>
          <span>·</span>
          <span>2 kamar mandi</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12 mt-6">
        {/* Left Column */}
        <div className="flex-1 min-w-0">
          <HostInfo />
          <ListingDescription />
          <Amenities />

          {/* Calendar Section */}
          <div ref={(el) => {
            if (showCalendar && el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>
            <DatePickerSection
              checkIn={checkIn}
              checkOut={checkOut}
              onChange={handleDateChange}
            />
          </div>
        </div>

        {/* Right Column - Sticky Booking Card */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="sticky top-6">
            <BookingCard
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onDateClick={() => {
                setShowCalendar(true);
                setTimeout(() => {
                  document
                    .getElementById("date-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              onGuestChange={setGuests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;