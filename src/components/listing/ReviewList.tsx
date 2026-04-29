"use client";

import type { Review, ReviewSummaryData, ReviewTag } from "@/types/review";
import { ReviewCard } from "./ReviewCard";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";

interface ReviewListProps {
  reviews: Review[];
  tags: ReviewTag[];
  summaryData: ReviewSummaryData;
  onReviewClick: (review: Review) => void;
  onShowAllReviews: () => void;
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-[#6a6a6a]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l4 4" />
    </svg>
  );
}

export function ReviewList({
  reviews,
  tags,
  summaryData,
  onReviewClick,
  onShowAllReviews,
}: ReviewListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState<ReviewTag | null>(null);

  // Display first 6 reviews
  const displayedReviews = reviews.slice(0, 6);

  const handleTagClick = (tag: ReviewTag) => {
    setActiveTag(tag);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveTag(null);
  };

  return (
    <div className="py-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Cari ulasan"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 border border-[#dddddd] rounded-full text-sm focus:outline-none focus:border-[#222222] focus:ring-1 focus:ring-[#222222] transition-all"
        />
      </div>

      {/* Review Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => handleTagClick(tag)}
            className="px-4 py-2.5 rounded-full text-sm font-medium transition-all bg-[#f7f7f7] text-[#222222] hover:bg-[#ebebeb]"
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-10">
        {displayedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onClick={() => onReviewClick(review)}
          />
        ))}
      </div>

      {/* Show All Button */}
      {reviews.length > 6 && (
        <button
          type="button"
          onClick={onShowAllReviews}
          className="px-6 py-3.5 border border-[#222222] rounded-lg text-base font-semibold text-[#222222] hover:bg-[#f7f7f7] transition-colors"
        >
          Tampilkan semua {reviews.length} ulasan
        </button>
      )}

      {/* Modal — opens when a tag is clicked */}
      <ReviewModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        reviews={reviews}
        summaryData={summaryData}
        tags={tags}
        initialSelectedTag={activeTag}
      />
    </div>
  );
}
