import { Logo } from "./components/Logo";

function App() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
      {/* Container buat Logo & Text */}
      <div className="flex flex-col items-center animate-slide-in">
        {/* Logo Airbnb Besar */}
        <Logo className="text-rausch w-64 md:w-96 h-auto mb-10 transition-transform hover:scale-105 duration-500" />

        {/* Konten Coming Soon */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-7xl font-bold text-hof tracking-tight">Coming Soon</h1>

          <p className="text-foggy text-lg md:text-2xl max-w-lg mx-auto leading-relaxed">
            Project clone <span className="font-semibold text-rausch">Airbnb</span> dari{" "}
            <span className="text-hof font-semibold">Tim 3</span> lagi dalam tahap pengembangan.
          </p>
        </div>

        {/* Action Button (Style Airbnb) */}
        <div className="mt-12 group">
          <button className="btn-rausch px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-rausch/20 transition-all active:scale-95">
            Dapatkan Notifikasi
          </button>
        </div>
      </div>

      {/* Footer Kecil (Opsional) */}
      <footer className="absolute bottom-8 text-bobo text-sm font-medium">
        © 2026 PPWL Team 3. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
