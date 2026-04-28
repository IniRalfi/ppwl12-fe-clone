import { type ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
  /**
   * Scale keseluruhan UI.
   * - 1    = ukuran normal (default)
   * - 0.9  = sedikit lebih kecil (cocok Windows yang DPI lebih besar)
   * - 1.1  = sedikit lebih besar (cocok Linux/monitor 1080p)
   * Ubah nilai ini kalau tampilan di OS lain keliatan terlalu besar/kecil.
   */
  scale?: number;
}

export default function AppWrapper({ children, scale = 1 }: AppWrapperProps) {
  return (
    <div
      style={{
        zoom: scale,
        // Kompensasi tinggi agar scroll tetap benar saat scale < 1
        minHeight: `${(1 / scale) * 100}vh`,
      }}
    >
      {children}
    </div>
  );
}
