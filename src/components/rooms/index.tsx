// src/components/rooms/index.tsx — main entry (RoomsDetail)
import { useRoomsDetail } from "./useRoomsDetail";
import { MONTHS } from "./constants";

import HostInfo from "./HostInfo";
import RoomsDescription from "./RoomsDescription";
import Amenities from "./Amenities";
import BookingCard from "./BookingCard";
import DatePickerSection from "./DatePicker";
import { ReviewSummary } from "./ReviewSummary";
import { ReviewList } from "./ReviewList";
import { ReviewModal } from "./ReviewModal";
import RoomsMap from "./RoomsMap";
import HostProfile from "./HostProfile";
import RoomsInfoExtra from "./RoomsInfoExtra";
import NearbyRooms from "./NearbyRooms";

import { reviews, reviewTags, reviewSummaryData } from "../../data/reviewsData";

const RoomsDetail = () => {
  const {
    startDate,
    endDate,
    selecting,
    currentMonthIndex,
    isPromoApplied,
    guests,
    isModalOpen,
    showCalendar,
    nights,
    setSelecting,
    setCurrentMonthIndex,
    setGuests,
    handleDateClick,
    handleClearDates,
    handleAddOneNight,
    handleScrollToCalendar,
    handleShowAllReviews,
    handleCloseModal,
    handleReviewClick,
  } = useRoomsDetail();

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
        <div className="flex-1 min-w-0">
          <HostInfo />
          <RoomsDescription />
          <Amenities />
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

      {/* Reviews */}
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

      {/* Bagian Bagas */}
      <RoomsMap />
      <HostProfile />
      <RoomsInfoExtra />
      <NearbyRooms />

      {/* Modal Review */}
      {isModalOpen && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          reviews={reviews}
          summaryData={reviewSummaryData}
          tags={reviewTags}
        />
      )}
    </div>
  );
};

export default RoomsDetail;
