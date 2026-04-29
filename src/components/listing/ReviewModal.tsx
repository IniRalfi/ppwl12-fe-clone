"use client";

import type { Review, ReviewSummaryData, ReviewTag } from "@/types/review";
import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: Review[];
  summaryData: ReviewSummaryData;
  tags: ReviewTag[];
  initialSelectedTag?: ReviewTag | null;
}

function CloseIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.96 2.96a.75.75 0 011.06 0L8 6.94l3.98-3.98a.75.75 0 111.06 1.06L9.06 8l3.98 3.98a.75.75 0 11-1.06 1.06L8 9.06l-3.98 3.98a.75.75 0 11-1.06-1.06L6.94 8 2.96 4.02a.75.75 0 010-1.06z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-[#6a6a6a]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l4 4" />
    </svg>
  );
}

function LaurelLeft() {
  return (
    <svg viewBox="0 0 21 24" fill="none" className="w-5 h-6">
      <path d="M16.373 14.588c.377 1.54.323 3.009-.14 4.373-.472 1.39-1.315 2.452-2.283 3.135-.94.664-2.02.994-2.995.872-.95-.119-1.78-.654-2.285-1.537-.258-.452-.419-.976-.476-1.555-.06-.6.002-1.27.2-1.993.337-1.23 1.039-2.497 2.121-3.522 1.075-1.019 2.456-1.749 4.001-1.925a6.033 6.033 0 0 1 1.857 2.152Zm-5.008 6.018c.424.417.948.627 1.513.655.584.03 1.207-.145 1.793-.516.561-.356 1.084-.893 1.487-1.588.387-.667.647-1.47.706-2.38a6.324 6.324 0 0 0-.35-2.514c-1.166.319-2.182.909-2.988 1.673-.813.77-1.404 1.736-1.68 2.737-.18.652-.219 1.242-.14 1.751a1.7 1.7 0 0 0-.34.182Zm3.917-8.168c-.66-.982-1.566-1.775-2.624-2.31-1.092-.552-2.372-.827-3.666-.75-1.295.077-2.549.514-3.58 1.215-1.008.686-1.76 1.587-2.13 2.598-.186.506-.263 1.027-.222 1.546.039.498.187.99.454 1.459.543.954 1.458 1.675 2.676 2.102 1.199.42 2.651.527 4.143.266 1.473-.258 2.885-.862 4.003-1.68a7.33 7.33 0 0 0 1.946-2.113 6.014 6.014 0 0 0-1-2.333Zm-8.937 3.994c-.75-.422-1.25-.991-1.48-1.614-.239-.645-.2-1.321.125-1.981.312-.634.844-1.2 1.567-1.657.695-.44 1.543-.754 2.48-.903a7.77 7.77 0 0 1 2.789.083c.939.186 1.794.55 2.481 1.05.266.194.503.41.707.643-.93-.173-1.88-.158-2.797.02-1.122.216-2.172.673-3.023 1.302-.856.632-1.502 1.432-1.859 2.296-.184.42-.284.846-.291 1.262a2.738 2.738 0 0 0-.699-.501ZM11.34 7.18a6.033 6.033 0 0 1-.536 2.785c-.458 1.102-1.207 2.066-2.158 2.793-.944.723-2.095 1.179-3.28 1.286-1.16.105-2.283-.141-3.197-.739-.468-.306-.845-.698-1.109-1.16a3.182 3.182 0 0 1-.413-1.537c-.003-1.258.513-2.635 1.473-3.864.952-1.22 2.319-2.241 3.89-2.802a6.035 6.035 0 0 1 5.33 3.238ZM3.586 9.755c-.535.808-.785 1.652-.726 2.426.063.8.433 1.492 1.058 2.012.598.498 1.394.815 2.312.89.882.072 1.858-.105 2.813-.543.917-.42 1.748-1.06 2.368-1.858.627-.808.994-1.756.994-2.73a3.52 3.52 0 0 0-.128-.903c-.83.688-1.793 1.206-2.82 1.515-1.252.378-2.596.448-3.84.181-1.249-.269-2.364-.845-3.18-1.628-.297-.278-.554-.582-.768-.903.295.524.615 1.058.917 1.541Z" fill="currentColor" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="0 0 21 24" fill="none" className="w-5 h-6 scale-x-[-1]">
      <path d="M16.373 14.588c.377 1.54.323 3.009-.14 4.373-.472 1.39-1.315 2.452-2.283 3.135-.94.664-2.02.994-2.995.872-.95-.119-1.78-.654-2.285-1.537-.258-.452-.419-.976-.476-1.555-.06-.6.002-1.27.2-1.993.337-1.23 1.039-2.497 2.121-3.522 1.075-1.019 2.456-1.749 4.001-1.925a6.033 6.033 0 0 1 1.857 2.152Zm-5.008 6.018c.424.417.948.627 1.513.655.584.03 1.207-.145 1.793-.516.561-.356 1.084-.893 1.487-1.588.387-.667.647-1.47.706-2.38a6.324 6.324 0 0 0-.35-2.514c-1.166.319-2.182.909-2.988 1.673-.813.77-1.404 1.736-1.68 2.737-.18.652-.219 1.242-.14 1.751a1.7 1.7 0 0 0-.34.182Zm3.917-8.168c-.66-.982-1.566-1.775-2.624-2.31-1.092-.552-2.372-.827-3.666-.75-1.295.077-2.549.514-3.58 1.215-1.008.686-1.76 1.587-2.13 2.598-.186.506-.263 1.027-.222 1.546.039.498.187.99.454 1.459.543.954 1.458 1.675 2.676 2.102 1.199.42 2.651.527 4.143.266 1.473-.258 2.885-.862 4.003-1.68a7.33 7.33 0 0 0 1.946-2.113 6.014 6.014 0 0 0-1-2.333Zm-8.937 3.994c-.75-.422-1.25-.991-1.48-1.614-.239-.645-.2-1.321.125-1.981.312-.634.844-1.2 1.567-1.657.695-.44 1.543-.754 2.48-.903a7.77 7.77 0 0 1 2.789.083c.939.186 1.794.55 2.481 1.05.266.194.503.41.707.643-.93-.173-1.88-.158-2.797.02-1.122.216-2.172.673-3.023 1.302-.856.632-1.502 1.432-1.859 2.296-.184.42-.284.846-.291 1.262a2.738 2.738 0 0 0-.699-.501ZM11.34 7.18a6.033 6.033 0 0 1-.536 2.785c-.458 1.102-1.207 2.066-2.158 2.793-.944.723-2.095 1.179-3.28 1.286-1.16.105-2.283-.141-3.197-.739-.468-.306-.845-.698-1.109-1.16a3.182 3.182 0 0 1-.413-1.537c-.003-1.258.513-2.635 1.473-3.864.952-1.22 2.319-2.241 3.89-2.802a6.035 6.035 0 0 1 5.33 3.238ZM3.586 9.755c-.535.808-.785 1.652-.726 2.426.063.8.433 1.492 1.058 2.012.598.498 1.394.815 2.312.89.882.072 1.858-.105 2.813-.543.917-.42 1.748-1.06 2.368-1.858.627-.808.994-1.756.994-2.73a3.52 3.52 0 0 0-.128-.903c-.83.688-1.793 1.206-2.82 1.515-1.252.378-2.596.448-3.84.181-1.249-.269-2.364-.845-3.18-1.628-.297-.278-.554-.582-.768-.903.295.524.615 1.058.917 1.541Z" fill="currentColor" />
    </svg>
  );
}

export function ReviewModal({
  isOpen,
  onClose,
  reviews,
  summaryData,
  tags,
  initialSelectedTag,
}: ReviewModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(
    initialSelectedTag?.id || null
  );
  const [sortBy, setSortBy] = useState("highest");

  // Sync when opened with a different tag
  useEffect(() => {
    setSelectedTag(initialSelectedTag?.id || null);
    setSearchQuery("");
  }, [initialSelectedTag, isOpen]);

  const isTagView = !!initialSelectedTag;

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.userName.toLowerCase().includes(searchQuery.toLowerCase());

    const activeTagName = tags.find((t) => t.id === selectedTag)?.label.toLowerCase();
    const matchesTag =
      !selectedTag || review.comment.toLowerCase().includes(activeTagName || "");

    return matchesSearch && matchesTag;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  const activeTagObj = tags.find((t) => t.id === selectedTag) || null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 animate-fadeIn" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden animate-scaleIn mx-4">

        {/* ── Header ── */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#ebebeb]">
          <div className="flex items-center gap-3 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-[#f7f7f7] transition-colors shrink-0"
            >
              <CloseIcon />
            </button>

            {/* Tag pills in header — shown in tag view so user can switch tags */}
            {isTagView && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => setSelectedTag(selectedTag === tag.id ? tag.id : tag.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedTag === tag.id
                        ? "bg-[#222222] text-white"
                        : "bg-[#f7f7f7] text-[#222222] hover:bg-[#ebebeb]"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Scrollable Content ── */}
        <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
          <div className="p-6 space-y-6">

            {isTagView ? (
              /* Tag View: large tag name + count */
              <div>
                <h2 className="text-2xl font-semibold text-[#222222] mb-1">
                  {activeTagObj?.label ?? initialSelectedTag?.label}
                </h2>
                <p className="text-sm text-[#6a6a6a]">
                  {sortedReviews.length} ulasan ·{" "}
                  <button
                    type="button"
                    onClick={onClose}
                    className="underline hover:text-[#222222] transition-colors"
                  >
                    Pilihan lebih banyak
                  </button>
                </p>
              </div>
            ) : (
              /* Full View: rating summary */
              <>
                <div>
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="flex items-center gap-1 mb-2">
                      <LaurelLeft />
                      <span className="text-5xl font-semibold text-[#222222] tracking-tight">
                        {summaryData.overallRating.toFixed(2)}
                      </span>
                      <LaurelRight />
                    </div>
                    {summaryData.isGuestFavorite && (
                      <>
                        <h2 className="text-base font-semibold text-[#222222] mb-1">Pilihan tamu</h2>
                        <p className="text-xs text-[#6a6a6a] max-w-[220px]">
                          Salah satu properti paling dicintai di Airbnb
                        </p>
                      </>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {summaryData.ratingBreakdown.map((item) => (
                      <div key={item.category} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-[#222222] shrink-0">{item.category}</span>
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="flex-1 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#222222] rounded-full"
                              style={{ width: `${(item.score / 5) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-[#222222] shrink-0 w-6 text-right">
                            {item.score.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-[#ebebeb]" />

                {/* Search & Sort */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <SearchIcon />
                    </div>
                    <input
                      type="text"
                      placeholder="Cari ulasan"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-[#dddddd] rounded-full text-sm focus:outline-none focus:border-[#222222] focus:ring-1 focus:ring-[#222222] transition-all"
                    />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 border border-[#dddddd] rounded-full text-sm bg-white focus:outline-none focus:border-[#222222] cursor-pointer"
                  >
                    <option value="highest">Rating tertinggi</option>
                    <option value="lowest">Rating terendah</option>
                    <option value="recent">Terbaru</option>
                  </select>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => setSelectedTag(selectedTag === tag.id ? null : tag.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedTag === tag.id
                          ? "bg-[#222222] text-white"
                          : "bg-[#f7f7f7] text-[#222222] hover:bg-[#ebebeb]"
                      }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-[#222222]">
                  {sortedReviews.length} ulasan
                </h3>
              </>
            )}

            {/* ── Reviews List ── */}
            <div className="space-y-8">
              {sortedReviews.map((review) => (
                <div key={review.id} className="pb-8 border-b border-[#ebebeb] last:border-b-0">
                  <ReviewCard review={review} />
                </div>
              ))}
              {sortedReviews.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-[#6a6a6a]">Tidak ada ulasan yang ditemukan</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
