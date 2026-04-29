// src/components/listing/ListingDetail.tsx
import { useState, useMemo } from "react";
import HostInfo from "./HostInfo";
import ListingDescription from "./ListingDescription";
import Amenities from "./Amenities";
import BookingCard from "./BookingCard";
import DatePickerSection from "./DatePicker";

// --- IMPORT REVIEW ---
import { ReviewSummary } from "./ReviewSummary";
import { ReviewList } from "./ReviewList";
import { ReviewModal } from "./ReviewModal";
import { reviews, reviewTags, reviewSummaryData } from "../../data/reviewsData";
import type { Review } from "../../types/review";

const MONTHS = [
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

const ListingDetail = () => {
  // --- STATE TANGGAL (Angka, Bukan Date Object) ---
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [selecting, setSelecting] = useState<"checkin" | "checkout">("checkin");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4); // Mei
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // --- STATE TAMU ---
  const [guests, setGuests] = useState(1);

  // --- STATE REVIEW ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- STATE SCROLL KALENDER ---
  const [showCalendar, setShowCalendar] = useState(false);

  // Computed
  const nights = useMemo(() => {
    if (startDate && endDate) return endDate - startDate;
    return 0;
  }, [startDate, endDate]);

  // --- HANDLER TANGGAL ---
  const handleDateClick = (day: number) => {
    setIsPromoApplied(false);
    if (selecting === "checkin") {
      setStartDate(day);
      setEndDate(null);
      setSelecting("checkout");
    } else {
      if (startDate && day > startDate) {
        setEndDate(day);
        setSelecting("checkin");
      } else {
        setStartDate(day);
        setSelecting("checkout");
      }
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setSelecting("checkin");
    setIsPromoApplied(false);
  };

  const handleAddOneNight = () => {
    if (endDate !== null && endDate < 31) {
      setEndDate(endDate + 1);
      setIsPromoApplied(true);
    }
  };

  const handleScrollToCalendar = () => {
    setShowCalendar(true);
    setTimeout(() => {
      document.getElementById("date-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // --- HANDLER REVIEW ---
  const handleShowAllReviews = () => setIsModalOpen(true);
  const handleReviewClick = (review: Review) => console.log("Review diklik:", review.userName);

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
          <span
            className="underline font-medium cursor-pointer hover:text-gray-900"
            onClick={handleShowAllReviews}
          >
            56 Ulasan
          </span>
          <span>·</span>
          <span className="underline font-medium cursor-pointer">Kuala Lumpur, Malaysia</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-600">
          <span>{guests} tamu</span>
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
          <div
            id="date-section"
            ref={(el) => {
              if (showCalendar && el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <DatePickerSection
              nights={nights}
              startDate={startDate}
              endDate={endDate}
              currentMonthIndex={currentMonthIndex}
              selecting={selecting}
              months={MONTHS}
              onDateClick={handleDateClick}
              onClearDates={handleClearDates}
              onPrevMonth={() => setCurrentMonthIndex((p) => (p === 0 ? 11 : p - 1))}
              onNextMonth={() => setCurrentMonthIndex((p) => (p === 11 ? 0 : p + 1))}
              location="Kuala Lumpur"
            />
          </div>
        </div>

        {/* Right Column - Sticky Booking Card */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="sticky top-28">
            <BookingCard
              startDate={startDate}
              endDate={endDate}
              nights={nights}
              currentMonthIndex={currentMonthIndex}
              selecting={selecting}
              isPromoApplied={isPromoApplied}
              guests={guests}
              onSelectingChange={setSelecting}
              onGuestChange={setGuests}
              onDateClick={handleScrollToCalendar}
              onAddOneNight={handleAddOneNight}
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 pt-12 border-t border-gray-200">
        <ReviewSummary data={reviewSummaryData} onShowAllReviews={handleShowAllReviews} />
        <div className="mt-8">
          <ReviewList
            reviews={reviews}
            tags={reviewTags}
            summaryData={reviewSummaryData}
            onReviewClick={handleReviewClick}
            onShowAllReviews={handleShowAllReviews}
          />
        </div>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          reviews={reviews}
          summaryData={reviewSummaryData}
          tags={reviewTags}
        />
      )}
    </div>
  );
};

export default ListingDetail;
