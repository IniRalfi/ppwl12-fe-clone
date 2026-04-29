import React, { useState } from "react";
import { Logo } from "../components/Logo";
import Navbar from "../components/Navbar";

// --- IMPORT FITUR REVIEW ---
import { ReviewSummary } from "../components/listing/ReviewSummary";
import { ReviewList } from "../components/listing/ReviewList";
import { ReviewModal } from "../components/listing/ReviewModal";
// Pastikan path ini benar sesuai struktur folder kamu
import { reviews, reviewTags, reviewSummaryData } from "../data/reviewsData";
import type { Review, ReviewTag } from "../types/review";

export default function ComponentTesting() {
  // State untuk testing Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler untuk memastikan fungsi terpanggil
  const handleShowAll = () => {
    console.log("Tombol Show All diklik!");
    setIsModalOpen(true);
  };

  const handleReviewClick = (review: Review) => {
    console.log("Review diklik:", review.userName);
  };

  const handleTagClick = (tag: ReviewTag) => {
    console.log("Tag diklik:", tag.label);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar Test */}
      <div className="bg-white border-b sticky top-0 z-[100]">
         <Navbar isScrolled={false} onSectionClick={(p) => console.log("Nav Click:", p)} />
      </div>

      <div className="p-8 space-y-12 max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">🛠️ Component Testing Playground</h1>
          <p className="text-gray-600 mt-2">
            Tempat untuk tes interaksi komponen. Buka <b>Inspect Element (F12)</b> untuk melihat log klik.
          </p>
        </div>

        {/* 2. Test Logo */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">1. Logo Component</h2>
          <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <Logo className="text-rausch w-32 h-auto" />
          </div>
        </section>

        {/* 3. TEST FITUR REVIEW */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-red-500">2. Review Feature Test</h2>
          
          <div className="space-y-10">
            {/* Bagian Atas: Summary */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">A. Summary View</h3>
              {/* FIXED: Tambahkan onShowAllReviews karena di interface ReviewSummary bersifat required */}
              <ReviewSummary 
                data={reviewSummaryData} 
                onShowAllReviews={handleShowAll} 
              />
            </div>

            {/* Bagian Bawah: List */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">B. List View (Clickable)</h3>
              <div className="bg-white p-4 border rounded-xl">
                <ReviewList 
                  reviews={reviews} 
                  tags={reviewTags}
                  onReviewClick={handleReviewClick}
                  onTagClick={handleTagClick}
                  onShowAllReviews={handleShowAll}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Testing Spacer */}
        <div className="h-20"></div>
      </div>

      {/* 4. MODAL TESTING (Gunakan z-index tinggi agar tidak tertutup Navbar) */}
      {isModalOpen && (
        <ReviewModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          reviews={reviews}
          // FIXED: Nama prop harus summaryData dan tambahkan tags sesuai interface ReviewModal kamu
          summaryData={reviewSummaryData} 
          tags={reviewTags}
        />
      )}
    </div>
  );
}