// src/components/listing/useListingDetail.ts
import { useState, useMemo } from "react";
import type { Review } from "../../types/review";

export function useListingDetail() {
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [selecting, setSelecting] = useState<"checkin" | "checkout">("checkin");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [guests, setGuests] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const nights = useMemo(() => {
    if (startDate && endDate) return endDate - startDate;
    return 0;
  }, [startDate, endDate]);

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

  const handleShowAllReviews = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleReviewClick = (review: Review) => console.log("Review diklik:", review.userName);

  return {
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
  };
}
