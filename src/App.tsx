import { Logo } from "./components/Logo";

function App() {
  return (
    <main className="relative min-h-screen bg-mesh overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Elemen Dekorasi Ngambang di Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rausch/10 blur-[120px] rounded-full animate-blob"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rausch/5 blur-[100px] rounded-full animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-rausch/10 blur-[80px] rounded-full animate-pulse-soft"></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Container Logo dengan Efek Floating & Shadow */}
        <div className="animate-float mb-12 relative group">
          {/* Glow effect di belakang logo */}
          <div className="absolute inset-0 bg-rausch/20 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <Logo className="text-rausch w-64 md:w-96 h-auto drop-shadow-2xl relative z-10" />
        </div>

        {/* Teks dengan Glassmorphism effect */}
        <div className="text-center space-y-6 max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-2 border border-rausch/20 rounded-full bg-white/50 backdrop-blur-md">
            <span className="text-rausch text-sm font-bold tracking-widest uppercase">
              Under Construction
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold text-hof tracking-tight leading-[1.1]">
            Coming <span className="text-rausch">Soon</span>
          </h1>

          <p className="text-foggy text-xl md:text-3xl max-w-xl mx-auto font-medium leading-relaxed">
            Sesuatu yang besar dari{" "}
            <span className="text-hof font-bold uppercase tracking-tighter">Tim 3</span> sedang
            disiapkan secara rahasia.
          </p>
        </div>

        {/* Notifikasi Button */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <button className="btn-rausch px-12 py-5 rounded-2xl text-xl shadow-[0_20px_50px_rgba(255,56,92,0.3)] hover:shadow-rausch/40 hover:-translate-y-1 transition-all active:scale-95 active:translate-y-0">
            Dapatkan Akses Awal
          </button>

          <p className="text-bobo text-sm font-semibold tracking-wide">
            Jadilah yang pertama tahu saat kami meluncur.
          </p>
        </div>
      </div>

      {/* Footer minimalis */}
      <footer className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="w-12 h-[1px] bg-deco mb-2"></div>
        <p className="text-bobo text-xs font-bold tracking-[0.3em] uppercase">© 2026 PPWL Team 3</p>
      </footer>
    </main>
  );
}

export default App;
