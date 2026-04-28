import AppWrapper from "./components/AppWrapper";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

function App() {
  return (
    // 1 = normal | 0.9 = lebih kecil | 1.1 = lebih besar
    <AppWrapper scale={1}>
      <Navbar />
      <SearchBar />
      <ComingSoon />
      <Footer />
    </AppWrapper>
  );
}

export default App;
