// src/components/rooms/RoomsInfoExtra.tsx

const INFO_SECTIONS = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "Kebijakan pembatalan",
    items: [
      "Tambahkan tanggal perjalanan Anda untuk mendapatkan detail pembatalan untuk masa inap ini.",
    ],
    link: "Tambahkan tanggal",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Peraturan rumah",
    items: ["Check-in: 15.00 - 23.00", "Check-out sebelum 11.00", "Maksimum 15 tamu"],
    link: "Pelajari selengkapnya",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Keselamatan & properti",
    items: ["Alarm karbon monoksida tidak dilaporkan", "Alarm asap tidak dilaporkan"],
    link: "Pelajari selengkapnya",
  },
];

const RoomsInfoExtra = () => {
  return (
    <section className="py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Hal yang perlu diketahui</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INFO_SECTIONS.map((section, i) => (
          <div key={i} className="space-y-3">
            <div className="text-gray-700">{section.icon}</div>
            <h3 className="font-semibold text-gray-900">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, j) => (
                <li key={j} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-sm font-semibold underline text-gray-900 hover:text-gray-600 transition-colors">
              {section.link}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsInfoExtra;
