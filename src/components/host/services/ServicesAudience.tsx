const avatarFaces = [
  {
    // Man with glasses - leftmost, smallest
    src: "https://a0.muscache.com/im/pictures/user/User-488124370/original/9ad84e7c-0cf4-4e5b-aee7-d34b0ea8f9f5.jpg?im_w=240",
    size: 72,
    fallback:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=face",
  },
  {
    // Woman short dark hair
    src: "https://a0.muscache.com/im/pictures/user/User-11044860/original/38a6c3c2-7c0b-4b60-b9e4-57caa1acdaae.jpg?im_w=240",
    size: 90,
    fallback:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&h=240&fit=crop&crop=face",
  },
  {
    // Woman center - biggest
    src: "https://a0.muscache.com/im/pictures/user/User-2091238/original/ea3b15b2-7c60-4b5b-a5da-c10e4f68c3a4.jpg?im_w=240",
    size: 112,
    fallback:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=240&fit=crop&crop=face",
  },
  {
    // Man curly hair
    src: "https://a0.muscache.com/im/pictures/user/User-354476882/original/b9fbd3b1-4dc5-40e1-a7dd-45cd38ba77ca.jpg?im_w=240",
    size: 90,
    fallback:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop&crop=face",
  },
  {
    // Woman dark skin, dreadlocks - rightmost, smallest
    src: "https://a0.muscache.com/im/pictures/user/User-6458428/original/fdefe97b-6a88-48aa-b26d-21ebe11d9e31.jpg?im_w=240",
    size: 72,
    fallback:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=240&h=240&fit=crop&crop=face",
  },
];

export default function ServicesAudience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center">
          {/* Big heading */}
          <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-bold text-hof leading-tight tracking-tight">
            Sambut dunia yang penuh
            <br />
            dengan pelanggan baru
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-foggy max-w-[480px] mx-auto leading-relaxed">
            Jangkau jutaan orang yang bepergian dan tinggal di dekat Anda melalui Airbnb.
          </p>

          {/* ── Avatar fan style — 5 foto wajah orang, tengah terbesar ── */}
          <div className="flex justify-center items-center mt-14 mb-12">
            <div className="flex items-center">
              {avatarFaces.map((av, i) => (
                <div
                  key={i}
                  className="rounded-full overflow-hidden border-[3px] border-white shadow-md shrink-0"
                  style={{
                    width: av.size,
                    height: av.size,
                    marginLeft: i === 0 ? 0 : -(av.size * 0.2),
                    zIndex: i < 2 ? i + 1 : i === 2 ? 10 : 5 - i,
                  }}
                >
                  <img
                    src={av.src}
                    alt={`Guest ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = av.fallback;
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stat 1 */}
          <p className="text-[40px] md:text-[52px] font-bold text-hof leading-none">
            390 juta tamu
          </p>
          <p className="text-[15px] md:text-[17px] text-foggy mt-2">tiba di tahun 2024</p>

          {/* Divider */}
          <div className="w-[300px] h-px bg-deco mx-auto my-8" />

          {/* Stat 2 */}
          <p className="text-[40px] md:text-[52px] font-bold text-hof leading-none">
            $81 miliar USD
          </p>
          <p className="text-[15px] md:text-[17px] text-foggy mt-2">
            dibelanjakan di Airbnb pada tahun 2024
          </p>

          {/* Small description */}
          <div className="mt-8 space-y-0.5">
            <p className="text-[13px] text-foggy">390 juta termasuk tamu baru dan lama.</p>
            <p className="text-[13px] text-foggy">
              Pemesanan kotor sebesar $81 miliar USD untuk penginapan dan pengalaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
