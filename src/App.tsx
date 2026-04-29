import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import type { NavTab } from "./components/Navbar"; // IMPORT TIPE TAB
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { useScrolled } from "./hooks/useScrolled";
import type { ActivePanel } from "./types/search";

// --- IMPORT COMPONENT TESTING ---
// import ComponentTesting from "./pages/ComponentTesting";

// --- IMPORT DATA & COMPONENT EXPERIENCES ---
import ExperienceSection from "./components/experiences/ExperienceSection";
import { homesData } from "./data/homesData";
import { experiencesData } from "./data/experiencesData";
import { servicesData } from "./data/servicesData";

// --- IMPORT COMPONENT LISTING DETAIL ---
import ListingDetail from "./components/listing/ListingDetail";
import ImageGalleryComponent from "./components/listing/ImageGallery";
import { listingImages } from "./data/listingImages";
import StickyTabs from "./components/listing/StickyTabs";

// Halaman Utama (Home)
function Home() {
  const isScrolled = useScrolled();
  const [forceExpanded, setForceExpanded] = useState(false);
  const [triggerPanel, setTriggerPanel] = useState<ActivePanel>(null);

  // STATE BARU BUAT NGEHUBUNGIN NAVBAR SAMA EXPERIENCE SECTION
  const [activeTab, setActiveTab] = useState<NavTab>("homes");

  useEffect(() => {
    if (!isScrolled) {
      setForceExpanded(false);
    }
  }, [isScrolled]);

  const effectiveScrolled = isScrolled && !forceExpanded;

  const handleCompactClick = (panel: ActivePanel) => {
    setForceExpanded(true);
    setTriggerPanel(panel);
  };

  return (
    <AppWrapper scale={0.85}>
      {/* Navbar sekarang mengontrol activeTab */}
      <Navbar
        isScrolled={effectiveScrolled}
        onSectionClick={handleCompactClick}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <SearchBar
        forceExpanded={forceExpanded}
        triggerPanel={triggerPanel}
        onPanelTriggered={() => setTriggerPanel(null)}
        onClose={() => setForceExpanded(false)}
      />

      {/* ExperienceSection sekarang merespon tab dari Navbar */}
      <div className="max-w-[1760px] mx-auto w-full pt-8 pb-16">
        <ExperienceSection
          activeTab={activeTab}
          homesData={homesData}
          experiencesData={experiencesData}
          servicesData={servicesData}
        />
      </div>

      <Footer type="home" />
    </AppWrapper>
  );
}

// Halaman Detail Listing
// Halaman Detail Listing
// Halaman Detail Listing
function ListingPage() {
  const [forceExpanded, setForceExpanded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Di listing: default compact, expand kalau diklik
  const effectiveScrolled = !forceExpanded;

  return (
    <div className="min-h-screen bg-white font-sans text-hof pb-10">
      <Navbar
        isScrolled={effectiveScrolled}
        onSectionClick={() => setForceExpanded(true)}
        isSticky={false}
      />
      {/* SearchBar muncul kalau user mau nyari lagi */}
      {forceExpanded && (
        <SearchBar
          forceExpanded={forceExpanded}
          triggerPanel={null}
          onPanelTriggered={() => {}}
          onClose={() => setForceExpanded(false)}
        />
      )}

      <StickyTabs galleryRef={galleryRef} />
      <ImageGalleryComponent ref={galleryRef} images={listingImages} />
      <ListingDetail />

      <div className="mt-16">
        <Footer type="detail" />
      </div>
    </div>
  );
}

// Gunakan App sebagai Router utama
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/testing" element={<ComponentTesting />} /> */}
      <Route path="/listing/:id" element={<ListingPage />} />
    </Routes>
  );
}

export default App;
