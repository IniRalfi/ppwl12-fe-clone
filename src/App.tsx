import { useState, useEffect } from "react";
import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import { useScrolled } from "./hooks/useScrolled";
import type { ActivePanel } from "./types/search";

function App() {
  const isScrolled = useScrolled();
  const [forceExpanded, setForceExpanded] = useState(false);
  const [triggerPanel, setTriggerPanel] = useState<ActivePanel>(null);

  // Jika scroll alami kembali ke atas, matikan mode forceExpanded
  useEffect(() => {
    if (!isScrolled) {
      setForceExpanded(false);
    }
  }, [isScrolled]);

  const effectiveScrolled = isScrolled && !forceExpanded;

  const handleCompactClick = (panel: ActivePanel) => {
    setForceExpanded(true); // paksa tampilan jadi "belum scroll"
    setTriggerPanel(panel); // buka panel di SearchBar
  };

  return (
    <AppWrapper scale={1}>
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

export default App;
