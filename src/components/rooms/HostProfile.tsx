// src/components/rooms/HostProfile.tsx

const HOST = {
  name: "Sue",
  avatar: "https://i.pravatar.cc/120?img=47",
  reviewCount: 230,
  rating: 4.8,
  yearsHosting: 7,
  languages: "Bahasa Tionghoa, Inggris, dan Melayu",
  location: "Kuala Lumpur, Malaysia",
  bio: "Dengan 10+ tahun di industri hotel dan sekarang 6+ tahun menerima tamu, keramahtamahan ada dalam DNA saya. Meskipun saya telah beralih ke pos pemasaran selama pandemi, menerima tamu tetap menjadi kegembiraan saya — saya mencurahkan inspirasi perjalanan global saya dan memperhatikan detail setiap masa inap, memastikan Anda merasakan kehangatan Malaysia dengan kenyamanan duniawi.",
  responseRate: "100%",
  responseTime: "Menanggapi dalam satu jam",
};

const HostProfile = () => {
  return (
    <section className="py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tuan rumah Anda</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-6 md:w-72 shrink-0">
          {/* Kartu Profil */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <img
                  src={HOST.avatar}
                  alt={HOST.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#FF385C] rounded-full p-1.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{HOST.name}</p>
                <p className="text-sm text-gray-500">Tuan Rumah</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-start pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{HOST.reviewCount}</p>
                <p className="text-xs text-gray-500">Ulasan</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{HOST.rating}★</p>
                <p className="text-xs text-gray-500">Nilai</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{HOST.yearsHosting}</p>
                <p className="text-xs text-gray-500 leading-tight">
                  Tahun menjadi
                  <br />
                  tuan rumah
                </p>
              </div>
            </div>
          </div>

          {/* Info Bahasa & Lokasi */}
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-lg">🗣️</span>
              <span>Saya menguasai {HOST.languages}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🌍</span>
              <span>Tinggal di {HOST.location}</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-700 leading-relaxed">{HOST.bio}</p>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Detail Tuan Rumah</h3>
            <p className="text-sm text-gray-700">Tingkat respons: {HOST.responseRate}</p>
            <p className="text-sm text-gray-700">{HOST.responseTime}</p>
          </div>

          <button className="w-fit border border-gray-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
            Kirimkan pesan kepada tuan rumah
          </button>

          <div className="flex items-start gap-3 mt-4 pt-4 border-t border-gray-200">
            <span className="text-xl shrink-0">🛡️</span>
            <p className="text-xs text-gray-500 leading-relaxed">
              Untuk membantu melindungi pembayaran Anda, pastikan Anda selalu menggunakan Airbnb
              untuk mengirimkan uang dan berkomunikasi dengan tuan rumah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostProfile;
