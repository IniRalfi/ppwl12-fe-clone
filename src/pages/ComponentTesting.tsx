import { useState } from "react";

// --- IMPORT KOMPONEN ---
import { Logo } from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import SearchBar from "../components/SearchBar";
import StickyTabs from "../components/listing/StickyTabs";

// --- IMPORT FITUR LISTING DETAIL (BESAR) ---
import ListingDetail from "../components/listing/ListingDetail";
import ImageGalleryComponent from "../components/listing/ImageGallery";
import { listingImages } from "../data/listingImages";

// --- IMPORT FITUR REVIEW ---
import { ReviewSummary } from "../components/listing/ReviewSummary";
import { ReviewList } from "../components/listing/ReviewList";
import { ReviewModal } from "../components/listing/ReviewModal";
import { reviews, reviewTags, reviewSummaryData } from "../data/reviewsData";
import type { Review } from "../types/review";

export default function ComponentTesting() {
  // State untuk testing Modal Review
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers untuk Review
  const handleShowAll = () => setIsModalOpen(true);
  const handleReviewClick = (review: Review) => console.log("Review diklik:", review.userName);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative font-sans text-hof">
      {/* 1. Navbar Component */}
      <div className="bg-white border-b sticky top-0 z-100">
        <Navbar isScrolled={false} onSectionClick={(p) => console.log("Nav Click:", p)} />
      </div>

      {/* Komponen StickyTabs (Bakal muncul pas discroll ke bawah) */}
      <StickyTabs />

      <div className="p-8 space-y-16 max-w-[1200px] mx-auto w-full grow">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">🛠️ Component Testing Playground</h1>
          <p className="text-gray-600 mt-2">
            Halaman ini khusus buat ngetes semua komponen yang udah dibuat. Scroll ke bawah buat
            liat-liat ya! <br />
            <i>
              Catatan: <b>StickyTabs</b> bakal muncul otomatis di bawah Navbar kalau kamu scroll
              terus ke bawah.
            </i>
          </p>
        </div>

        {/* 2. Logo Component */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">1. Logo Component</h2>
          <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <Logo className="text-rausch w-32 h-auto" />
          </div>
        </section>

        {/* 3. SearchBar Component */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">2. SearchBar Component</h2>
          <div className="p-4 bg-gray-100 rounded-lg min-h-[400px] relative z-40">
            <SearchBar />
            <p className="text-center text-sm text-gray-400 mt-8">
              Coba klik tab "Lokasi", "Kapan", atau "Peserta" di atas
            </p>
          </div>
        </section>

        {/* 4. Full Listing Details (Amenities, Host, dll) */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">3. Listing Detail Layout</h2>
          <p className="text-sm text-gray-500 mb-4">
            Komponen ini otomatis manggil <b>HostInfo</b>, <b>Amenities</b>,{" "}
            <b>ListingDescription</b>, dan <b>DatePicker</b> sekaligus lho! (Bisa di-scroll di dalam
            kotaknya)
          </p>
          <div className="border border-gray-300 rounded-xl overflow-hidden bg-white max-h-[800px] overflow-y-auto custom-scrollbar">
            <ListingDetail />
          </div>
        </section>

        {/* 5. Image Gallery Component */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">4. Image Gallery Layout</h2>
          <p className="text-sm text-gray-500 mb-4">
            Ini komponen gallery + header booking yang posisinya ada di bagian paling atas halaman
            detail properti Airbnb. Coba klik gambarnya buat buka modalnya!
          </p>
          <div className="border border-gray-300 rounded-xl overflow-hidden bg-white max-h-[800px] overflow-y-auto custom-scrollbar">
            <ImageGalleryComponent images={listingImages} />
          </div>
        </section>

        {/* 6. Review Features Test */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">5. Review Feature Test</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                A. Summary View
              </h3>
              <ReviewSummary data={reviewSummaryData} onShowAllReviews={handleShowAll} />
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                B. List View (Clickable)
              </h3>
              <div className="bg-white p-4 border rounded-xl">
                <ReviewList
                  reviews={reviews}
                  tags={reviewTags}
                  summaryData={reviewSummaryData}
                  onReviewClick={handleReviewClick}
                  onShowAllReviews={handleShowAll}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Coming Soon Screen */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">6. Coming Soon Screen</h2>
          <div className="rounded-xl overflow-hidden h-[600px] relative border border-gray-200">
            <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
              <ComingSoon />
            </div>
          </div>
        </section>
      </div>

      {/* 8. Footer Component */}
      <section className="bg-white mt-auto">
        <div className="px-6 pb-2 pt-6 max-w-[1760px] mx-auto w-full">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
            7. Footer Component (Type: Home)
          </h2>
        </div>
        <Footer type="home" />
      </section>

      {/* --- REVIEW MODAL PORTAL --- */}
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
}
