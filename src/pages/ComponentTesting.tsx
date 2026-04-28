import { Logo } from "../components/Logo";
import Navbar from "@/components/Navbar";
import HostInfo from "@/components/listing/HostInfo";
import ListingDescription from "@/components/listing/ListingDescription";
import Amenities from "@/components/listing/Amenities";
import BookingCard from "@/components/listing/BookingCard";
import DatePickerSection from "@/components/listing/DatePicker";
import { useState } from "react";
import { addDays } from "date-fns";

export default function ComponentTesting() {
  const [checkIn, setCheckIn] = useState(addDays(new Date(), 10));
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 12));
  const [guests, setGuests] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🛠️ Component Testing Playground</h1>
        <p className="text-gray-600 mt-2">
          Tempat untuk tes dan melihat render spesifik tiap komponen. Teman-teman bisa nambahin
          komponen miliknya di bawah ini ya!
        </p>
      </div>

      {/* 1. Test Logo */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">1. Logo Component</h2>
        <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center">
          <Logo />
        </div>
      </section>

      {/* 2. Navbar */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">2. Navbar Component</h2>
        <div className="bg-white rounded-lg border">
          <Navbar isScrolled={false} onSectionClick={() => console.log("Section Clicked!")} />
        </div>
      </section>

      {/* 3. HostInfo */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">3. HostInfo Component</h2>
        <div className="bg-white rounded-lg px-4">
          <HostInfo />
        </div>
      </section>

      {/* 4. ListingDescription */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">4. ListingDescription Component</h2>
        <div className="bg-white rounded-lg px-4">
          <ListingDescription />
        </div>
      </section>

      {/* 5. Amenities */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">5. Amenities Component</h2>
        <div className="bg-white rounded-lg px-4">
          <Amenities />
        </div>
      </section>

      {/* 6. DatePicker */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">6. DatePicker Component</h2>
        <div className="bg-white rounded-lg px-4 overflow-x-auto">
          <DatePickerSection
            checkIn={checkIn}
            checkOut={checkOut}
            onChange={(start, end) => {
              setCheckIn(start);
              setCheckOut(end);
            }}
          />
          {/* Debug output */}
          <div className="mt-2 p-3 bg-gray-100 rounded text-sm text-gray-600">
            <span className="font-semibold">State:</span>{" "}
            Check-in: {checkIn.toLocaleDateString("id-ID")} →
            Check-out: {checkOut.toLocaleDateString("id-ID")}
          </div>
        </div>
      </section>

      {/* 7. BookingCard */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">7. BookingCard Component</h2>
        <div className="max-w-sm mx-auto">
          <BookingCard
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
            onDateClick={() => alert("Date picker diklik!")}
            onGuestChange={setGuests}
          />
          {/* Debug output */}
          <div className="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-600">
            <span className="font-semibold">State:</span>{" "}
            Tamu: {guests} | Check-in: {checkIn.toLocaleDateString("id-ID")} |
            Check-out: {checkOut.toLocaleDateString("id-ID")}
          </div>
        </div>
      </section>

    </div>
  );
}