import { useState, useMemo } from "react";
import type { ListingImageProps } from "@/types/listing";

export default function ListingDetail({ images }: ListingImageProps) {
  const [showGallery, setShowGallery] = useState(false);
  
  // --- STATE UTAMA ---
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [selecting, setSelecting] = useState<"checkin" | "checkout">("checkin");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  // State Navigasi Bulan
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4); // 4 = Mei
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const PRICE_PER_NIGHT = 2885187;
  const ADD_ON_PRICE = 2087561;
  
  const nights = useMemo(() => {
    if (startDate && endDate) return endDate - startDate;
    return 0;
  }, [startDate, endDate]);

  const totalPrice = nights * PRICE_PER_NIGHT;

  // --- HANDLER ---
  const nextMonth = () => setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  const prevMonth = () => setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));

  const handleDateClick = (day: number) => {
    setIsPromoApplied(false);
    if (selecting === "checkin") {
      setStartDate(day);
      setEndDate(null);
      setSelecting("checkout");
    } else {
      if (startDate && day > startDate) {
        setEndDate(day);
        setSelecting("checkin");
      } else {
        setStartDate(day);
        setSelecting("checkout");
      }
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setSelecting("checkin");
    setIsPromoApplied(false);
  };

  const handleAddOneNight = () => {
    if (endDate !== null && endDate < 31) {
      setEndDate(endDate + 1);
      setIsPromoApplied(true);
    }
  };

  const facilities = [
    { icon: "🍳", name: "Dapur" },
    { icon: "📶", name: "Wifi" },
    { icon: "🚗", name: "Parkir gratis di properti" },
    { icon: "🏊", name: "Kolam renang" },
    { icon: "🐾", name: "Hewan peliharaan diizinkan" },
    { icon: "📺", name: "TV" },
    { icon: "🧺", name: "Mesin cuci" },
    { icon: "💨", name: "Mesin pengering" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-[#222222] antialiased">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-2xl md:text-[26px] font-semibold tracking-tight">
            Rumah Kolam Renang Pribadi untuk 15 orang
          </h1>
          <div className="flex gap-4 text-sm font-semibold underline">
            <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">Bagikan</button>
            <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">Simpan</button>
          </div>
        </div>

        {/* --- GRID GAMBAR --- */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[480px] relative shadow-sm">
          <div className="col-span-2 row-span-2 cursor-pointer" onClick={() => setShowGallery(true)}>
            <img src={images[0]} alt="Main" className="w-full h-full object-cover hover:brightness-90 transition-all duration-300" />
          </div>
          {images.slice(1, 5).map((img, index) => (
            <div key={index} className="cursor-pointer relative overflow-hidden" onClick={() => setShowGallery(true)}>
              <img src={img} alt={`img-${index}`} className="w-full h-full object-cover hover:brightness-90 transition-all duration-300 hover:scale-105" />
              {index === 3 && (
                <button className="absolute bottom-4 right-4 bg-white border border-black rounded-lg px-4 py-1.5 font-semibold text-sm shadow-md hover:bg-gray-50 transition-colors">
                  ⠿ Tampilkan semua foto
                </button>
              )}
            </div>
          ))}
        </div>

        {/* --- LAYOUT UTAMA --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
          
          {/* KOLOM KIRI */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold">Seluruh rumah di Kuching, Malaysia</h2>
              <p className="text-gray-600 text-lg mt-1">
                {guestCount} tamu · 4 kamar tidur · 6 tempat tidur · 3 kamar mandi
              </p>
              
              <div className="mt-8 border border-gray-200 rounded-2xl p-6 flex justify-between items-center shadow-sm max-w-xl bg-white">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center border-r border-gray-100 pr-6">
                    <span className="text-2xl">🏅</span>
                    <span className="font-bold text-xl leading-none mt-1">4,95</span>
                    <span className="text-[10px] mt-1 text-gray-500 font-bold">★★★★★</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg leading-tight">Pilihan tamu</p>
                    <p className="text-gray-500 text-sm mt-1">Salah satu rumah yang paling disukai di Airbnb</p>
                  </div>
                </div>
                <div className="text-center px-4">
                  <p className="text-xl font-bold">19</p>
                  <p className="text-[10px] underline font-bold text-gray-800">ULASAN</p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Highlights */}
            <div className="space-y-6 py-2">
              <div className="flex gap-5 items-start">
                <span className="text-2xl mt-1">🏊</span>
                <div>
                  <p className="font-semibold text-base">Tunggu apa lagi?</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Ini salah satu dari sedikit tempat di area ini yang menyediakan kolam renang.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="text-2xl mt-1">🔑</span>
                <div>
                  <p className="font-semibold text-base">Pengalaman check-in luar biasa</p>
                  <p className="text-gray-500 text-sm leading-relaxed">Tamu memberikan nilai 5 bintang untuk kemudahan proses masuk.</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Narasi Deskripsi */}
            <section className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl inline-flex items-center gap-2 text-sm text-gray-800">
                <span>🌐</span> Beberapa info diterjemahkan secara otomatis. <span className="font-bold underline cursor-pointer">Tampilkan bahasa asli</span>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                <p>
                  Temukan tempat peristirahatan kami yang tenang di Bali, cocok untuk hingga 15 tamu. 
                  Rumah dua lantai bergaya ini memiliki empat kamar tidur luas, ruang tamu terbuka 
                  dengan dekorasi elegan, dan kolam renang luar ruangan pribadi.
                </p>
              </div>
              <button className="font-semibold underline flex items-center gap-1 hover:text-black transition-colors">
                Tampilkan selengkapnya <span className="text-xs">❯</span>
              </button>
            </section>

            <hr className="border-gray-200" />

            {/* Fasilitas */}
            <section>
              <h3 className="text-xl font-semibold mb-8">Fasilitas yang ditawarkan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl w-8 text-center grayscale-[0.5]">{f.icon}</span>
                    <span className="text-gray-700 text-base font-light">{f.name}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 border border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all active:scale-95">
                Tampilkan ke-30 fasilitas
              </button>
            </section>

            <hr className="border-gray-200" />

            {/* --- KALENDER (UI REFINED) --- */}
            <section className="pt-4">
              <h3 className="text-[22px] font-semibold mb-2">
                {nights > 0 ? `${nights} malam di Kuching` : "Pilih tanggal check-in"}
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                {startDate && endDate ? `${startDate} - ${endDate} ${months[currentMonthIndex]} 2026` : "Tambahkan tanggal perjalanan untuk melihat harga yang tepat"}
              </p>
              
              <div className="max-w-md bg-white p-2">
                 <div className="flex justify-between items-center mb-8">
                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                       <span className="text-lg font-bold">❮</span>
                    </button>
                    <p className="font-semibold text-gray-900 text-base">{months[currentMonthIndex]} 2026</p>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                       <span className="text-lg font-bold">❯</span>
                    </button>
                 </div>

                 <div className="grid grid-cols-7 text-center text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map(d => <div key={d}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isSelected = day === startDate || day === endDate;
                    const isInRange = startDate && endDate && day > startDate && day < endDate;
                    
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`aspect-square flex items-center justify-center text-sm font-semibold transition-all duration-200
                          ${isSelected ? 'bg-black text-white rounded-full z-10 shadow-lg' : 'rounded-full'}
                          ${isInRange ? 'bg-gray-50 text-black' : 'hover:bg-gray-100 hover:ring-1 hover:ring-black'}
                          ${!isSelected && !isInRange ? 'text-gray-800' : ''}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                
                <div className="flex justify-end mt-6">
                  <button 
                    onClick={handleClearDates}
                    className="text-sm font-semibold underline text-gray-800 hover:text-black p-2 transition-colors"
                  >
                    Kosongkan tanggal
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* --- SIDEBAR BOOKING (UI REFINED) --- */}
          <div className="relative">
            <div className="sticky top-28 space-y-5">
              
              {/* Promo Banner */}
              <div className="bg-[#f7f7f7] border border-gray-200 rounded-xl p-5 shadow-sm transition-all duration-500 overflow-hidden">
                {!isPromoApplied ? (
                  <div className="flex items-start gap-4">
                    <span className="text-2xl animate-bounce-slow">🏷️</span>
                    <div className="text-sm">
                      <p className="font-bold text-gray-900 leading-snug">
                        Tambah satu malam hanya Rp{ADD_ON_PRICE.toLocaleString('id-ID')}
                      </p>
                      <button onClick={handleAddOneNight} className="font-bold underline mt-2 block hover:text-rose-600 transition-colors">
                        Gunakan tawaran
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3 items-center text-sm font-bold text-gray-800">
                    <div className="bg-green-600 text-white rounded-full p-1.5 flex items-center justify-center">
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    Tawaran berhasil ditambahkan!
                  </div>
                )}
              </div>

              {/* Booking Card */}
              <div className="border border-gray-200 rounded-2xl p-6 shadow-2xl bg-white ring-1 ring-black/5">
                <div className="mb-6">
                  {nights > 0 ? (
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">Rp{PRICE_PER_NIGHT.toLocaleString('id-ID')}</span>
                        <span className="text-gray-500 font-normal">malam</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1 font-medium underline">
                        Total: Rp{totalPrice.toLocaleString('id-ID')}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl font-semibold">Rp{PRICE_PER_NIGHT.toLocaleString('id-ID')} <span className="text-base font-normal text-gray-500">malam</span></div>
                  )}
                </div>

                <div className="border border-gray-400 rounded-xl overflow-hidden ring-1 ring-gray-300 mb-4 focus-within:ring-2 focus-within:ring-black transition-all">
                  <div className="grid grid-cols-2 border-b border-gray-300">
                    <div 
                      className={`p-3 border-r border-gray-300 cursor-pointer transition-colors ${selecting === 'checkin' ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`} 
                      onClick={() => setSelecting("checkin")}
                    >
                      <label className="block text-[10px] font-extrabold uppercase tracking-tight">Check-in</label>
                      <div className="text-sm font-medium mt-0.5">{startDate ? `${startDate}/${currentMonthIndex + 1}/26` : 'Tambah tanggal'}</div>
                    </div>
                    <div 
                      className={`p-3 cursor-pointer transition-colors ${selecting === 'checkout' ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`} 
                      onClick={() => setSelecting("checkout")}
                    >
                      <label className="block text-[10px] font-extrabold uppercase tracking-tight">Check-out</label>
                      <div className="text-sm font-medium mt-0.5">{endDate ? `${endDate}/${currentMonthIndex + 1}/26` : 'Tambah tanggal'}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <label className="block text-[10px] font-extrabold uppercase tracking-tight">Tamu</label>
                    <select 
                      value={guestCount} 
                      onChange={(e) => setGuestCount(Number(e.target.value))} 
                      className="w-full bg-transparent text-sm font-medium focus:outline-none py-1 cursor-pointer appearance-none"
                    >
                      {[...Array(15)].map((_, i) => <option key={i} value={i+1}>{i+1} tamu</option>)}
                    </select>
                  </div>
                </div>

                <button className={`w-full py-3.5 rounded-lg font-bold text-lg transition-all duration-300 transform active:scale-[0.98] ${nights > 0 ? 'bg-gradient-to-r from-[#E31C5F] to-[#D70466] text-white shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                  {nights > 0 ? "Pesan" : "Periksa ketersediaan"}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">Anda belum dikenakan biaya</p>
              </div>

              {/* Price Banner */}
              <div className="border border-gray-200 rounded-xl p-4 flex gap-4 bg-white shadow-sm ring-1 ring-black/5">
                <span className="text-xl text-rose-500">🏷️</span>
                <div className="text-sm text-gray-700">
                  <p className="font-bold">Harga yang bagus</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Masa inap Anda lebih hemat Rp577.943 dari harga rata-rata.</p>
                </div>
              </div>
              
              <div className="flex justify-center pt-2">
                <button className="text-gray-500 flex items-center gap-2 text-sm font-semibold underline">
                  <span>🚩</span> Laporkan iklan ini
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-white z-[999] overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-4xl mx-auto py-20 px-6">
            <button className="fixed top-8 left-8 text-2xl hover:bg-gray-100 p-3 rounded-full transition-all" onClick={() => setShowGallery(false)}>✕</button>
            <div className="flex flex-col gap-6">
              {images.map((img, i) => (
                <img key={i} src={img} className="w-full rounded-xl shadow-lg" alt="Gallery View" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}