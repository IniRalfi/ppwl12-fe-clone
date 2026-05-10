// src/components/host/services/ServicesCategory.tsx
// Ref 2: 5+4 rows, large 3D object icons, object-contain, no card border

const categories = [
  { id: "catering",          name: "Katering",        img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435442988/original/025a928a-4e57-4000-90a9-6142f101e85c.jpeg?im_w=240" },
  { id: "chef",              name: "Chef",             img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435412233/original/a11425d2-5a1a-4da2-ac92-1bd246300cad.jpeg?im_w=240" },
  { id: "hairstyling",       name: "Hairstyling",      img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435391001/original/927b4c14-55db-41d5-9093-adf6f419aba0.jpeg?im_w=240" },
  { id: "makeup",            name: "Make-up",          img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435276618/original/3c38f63a-8d5a-4265-9e32-58f103cbea61.jpeg?im_w=240" },
  { id: "massage",           name: "Pijat",            img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435335977/original/92f00797-2318-45c3-a425-829a8bafa48f.jpeg?im_w=240" },
  { id: "personal-training", name: "Latihan pribadi",  img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435097487/original/53e2886b-a9fc-483d-9fda-1a2c66f943fa.jpeg?im_w=240" },
  { id: "photography",       name: "Fotografi",        img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435252376/original/d7a62b38-4c80-4c91-b06e-2be7189d13b9.jpeg?im_w=240" },
  { id: "prepared-meals",    name: "Makanan jadi",     img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745435218016/original/e5e3039f-3d1d-4dd8-be35-b963256f7e3b.jpeg?im_w=240" },
  { id: "spa",               name: "Perawatan spa",    img: "https://a0.muscache.com/im/pictures/canvas/Canvas-1745602639670/original/17becbb3-ff07-486a-9edf-3b5380b2073d.jpeg?im_w=240" },
];

function CategoryItem({ name, img }: { name: string; img: string }) {
  return (
    <button className="flex flex-col items-center gap-4 group focus:outline-none">
      <div className="w-[96px] h-[96px] md:w-[112px] md:h-[112px] flex items-center justify-center">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <span className="text-[15px] font-normal text-hof group-hover:underline text-center leading-tight">
        {name}
      </span>
    </button>
  );
}

export default function ServicesCategory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[52px] lg:text-[62px] font-bold text-hof leading-tight tracking-tight">
            Tawarkan keahlian
            <br />
            terbaik Anda dengan
            <br />
            Airbnb Services
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-foggy max-w-[460px] mx-auto leading-relaxed">
            Airbnb lebih dari sekadar penginapan. Kini juga mencakup bisnis seperti milik Anda.
          </p>
        </div>

        {/* Row 1: 5 items */}
        <div className="flex justify-center gap-10 md:gap-16 lg:gap-24 mb-10 flex-wrap">
          {categories.slice(0, 5).map(c => <CategoryItem key={c.id} name={c.name} img={c.img} />)}
        </div>

        {/* Row 2: 4 items */}
        <div className="flex justify-center gap-10 md:gap-16 lg:gap-24 flex-wrap">
          {categories.slice(5).map(c => <CategoryItem key={c.id} name={c.name} img={c.img} />)}
        </div>
      </div>
    </section>
  );
}
