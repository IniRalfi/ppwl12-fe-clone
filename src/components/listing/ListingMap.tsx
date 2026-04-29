// src/components/listing/ListingMap.tsx

const ListingMap = () => {
  return (
    <section className="py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lokasi Anda</h2>
      <p className="text-gray-600 text-sm mb-6">Kuching, Sarawak, Malaysia</p>

      {/* Embed Google Maps iframe */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[400px] w-full">
        <iframe
          title="Lokasi Properti"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63932.90957765507!2d110.28483!3d1.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba59e59bfb189%3A0xafb0e0f8b3f9e7d8!2sKuching%2C%20Sarawak%2C%20Malaysia!5e0!3m2!1sid!2sid!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ListingMap;
