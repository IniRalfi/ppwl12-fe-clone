// src/components/listing/HostInfo.tsx

const HostInfo = () => {
  return (
    <div className="flex items-center gap-4 py-6 border-b border-gray-200">
      <div className="relative flex-shrink-0">
        <img
          src="https://i.pravatar.cc/56?img=12"
          alt="Host"
          className="w-14 h-14 rounded-full object-cover"
        />
        {/* Badge superhost */}
        <span className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
          <svg viewBox="0 0 16 16" className="w-3 h-3 fill-white">
            <path d="M8 0l1.6 4.8H15l-4.2 3 1.6 4.8L8 9.6l-4.4 3 1.6-4.8L1 4.8h5.4z" />
          </svg>
        </span>
      </div>

      <div>
        <p className="text-sm text-gray-500">Tuan rumah</p>
        <p className="font-semibold text-gray-900 text-lg">Jia Wei</p>
        <p className="text-sm text-gray-500">HosTeladan · Tuan rumah selama 4 tahun</p>
      </div>
    </div>
  );
};

export default HostInfo;