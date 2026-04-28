import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import { useScrolled } from "./hooks/useScrolled";
import type { ActivePanel } from "./types/search";

// Komponen Testing yang mau kamu buat (import ini nanti setelah file-nya dibuat ya)
import ComponentTesting from "./pages/ComponentTesting";

// Pisahkan halaman awalmu menjadi function Home
function Home() {
  const isScrolled = useScrolled();
  const [forceExpanded, setForceExpanded] = useState(false);
  const [triggerPanel, setTriggerPanel] = useState<ActivePanel>(null);

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
      <Navbar isScrolled={effectiveScrolled} onSectionClick={handleCompactClick} />
      <SearchBar
        forceExpanded={forceExpanded}
        triggerPanel={triggerPanel}
        onPanelTriggered={() => setTriggerPanel(null)}
        onClose={() => setForceExpanded(false)}
      />
      <ComingSoon />
      <Footer type="home" />
    </AppWrapper>
  );
}

// Gunakan App sebagai Router utama
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testing" element={<ComponentTesting />} />
    </Routes>
  );
}

export default App;
