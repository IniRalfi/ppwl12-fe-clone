"use client";

import type { Review } from "@/types/review";
import { useState } from "react";

interface ReviewCardProps {
  review: Review;
  onClick?: () => void;
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-3 h-3 ${filled ? "text-hof" : "text-deco"}`}
      viewBox="0 0 12 12"
      fill="currentColor"
    >
      <path d="M6 0l1.76 3.77 3.97.52-2.9 2.74.72 3.97L6 8.92 2.45 11l.72-3.97L.27 4.29l3.97-.52L6 0z" />
    </svg>
  );
}

export function ReviewCard({ review, onClick }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;
  const shouldTruncate = review.comment.length > maxLength;
  const displayText = shouldTruncate && !isExpanded
    ? `${review.comment.slice(0, maxLength)}...`
    : review.comment;

  return (
    <article
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* User Info Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.userAvatar}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-hof text-base">{review.userName}</h3>
          <p className="text-sm text-foggy">{review.userLocation}</p>
        </div>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={`star-${review.id}-${i}`} filled={i < review.rating} />
          ))}
        </div>
        <span className="text-sm text-foggy">{review.date}</span>
        {review.stayType && (
          <>
            <span className="text-foggy">·</span>
            <span className="text-sm text-foggy">{review.stayType}</span>
          </>
        )}
      </div>

      {/* Comment */}
      <p className="text-hof leading-relaxed text-base">
        {displayText}
        {shouldTruncate && !isExpanded && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
            className="font-semibold underline ml-1 hover:text-foggy transition-colors"
          >
            Tampilkan lebih banyak
          </button>
        )}
      </p>

      {/* Host Response */}
      {review.hostResponse && (
        <div className="mt-4 p-4 bg-faint rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-sm text-hof">Respons dari tuan rumah</span>
            <span className="text-sm text-foggy">{review.hostResponse.date}</span>
          </div>
          <p className="text-sm text-hof leading-relaxed">
            {review.hostResponse.message}
          </p>
        </div>
      )}
    </article>
  );
}
