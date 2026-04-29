"use client";

import type { ReviewSummaryData } from "@/types/review";

interface ReviewSummaryProps {
  data: ReviewSummaryData;
  onShowAllReviews: () => void;
}

// Laurel wreath SVG component
function LaurelLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23" />
      <path d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.28 -1.266 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04" />
      <path d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 scale-x-[-1]">
      <path d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23" />
      <path d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.28 -1.266 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04" />
      <path d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462" />
    </svg>
  );
}

// Rating category icons
function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case "sparkles":
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="currentColor">
      <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
    </svg>
  );
    case "check":
      return (
        <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 16l4 4 10-10" />
          <circle cx="16" cy="16" r="12" />
        </svg>
      );
   case "key":
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
    </svg>
  );
case "chat":
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
    </svg>
  );
case "location":
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="currentColor">
      <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
    </svg>
  );
case "tag":
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
    default:
      return null;
  }
}

// Rating bar chart component
function RatingChart() {
  const ratings = [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <div className="space-y-1.5">
      {ratings.map((rating) => (
        <div key={rating.stars} className="flex items-center gap-2">
          <span className="text-xs text-[#6a6a6a] w-2">{rating.stars}</span>
          <div className="flex-1 h-1 bg-[#dddddd] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#222222] rounded-full transition-all duration-500"
              style={{ width: `${rating.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReviewSummary({ data, onShowAllReviews }: ReviewSummaryProps) {
  return (
    <div className="py-12 border-t border-[#dddddd]">
      {/* Guest Favorite Badge */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-1 mb-2">
          <LaurelLeft />
          <span className="text-6xl font-semibold text-[#222222] tracking-tight">
            {data.overallRating.toFixed(2)}
          </span>
          <LaurelRight />
        </div>
        {data.isGuestFavorite && (
          <>
            <h2 className="text-lg font-semibold text-[#222222] mb-1">Pilihan tamu</h2>
            <p className="text-sm text-[#6a6a6a] max-w-xs">
              Salah satu properti paling dicintai di Airbnb berdasarkan rating, ulasan, dan keandalan
            </p>
          </>
        )}
      </div>

      {/* Rating Breakdown Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        {/* Overall Rating Chart */}
        <div className="col-span-2 md:col-span-1 p-4 border-r border-[#dddddd] last:border-r-0">
          <h3 className="text-sm font-medium text-[#222222] mb-3">Rating keseluruhan</h3>
          <RatingChart />
        </div>

        {/* Category Scores */}
        {data.ratingBreakdown.map((item, index) => (
          <div
            key={item.category}
            className={`p-4 ${index < data.ratingBreakdown.length - 1 ? "border-r border-[#dddddd]" : ""}`}
          >
            <h3 className="text-sm font-medium text-[#222222] mb-3">{item.category}</h3>
            <div className="text-lg font-semibold text-[#222222] mb-2">{item.score.toFixed(1)}</div>
            <div className="text-[#222222]">
              <CategoryIcon type={item.icon} />
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
