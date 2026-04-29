import { Logo } from "../components/Logo";
import Navbar from "@/components/Navbar";

export default function ComponentTesting() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🛠️ Component Testing Playground</h1>
        <p className="text-gray-600 mt-2">
          Tempat untuk tes dan melihat render spesifik tiap komponen. Teman-teman bisa nambahin
          komponen miliknya di bawah ini ya!
        </p>
      </div>

      {/* 1. Test Logo */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">1. Logo Component</h2>
        <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center">
          <Logo />
        </div>
      </section>

      {/* Testing Apa */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Nama Components</h2>
        <div className="bg-white rounded-lg border">
          {/* benda ini bisa diganti jadi apa gitu */}
          <Navbar isScrolled={false} onSectionClick={() => console.log("Section Clicked!")} />
        </div>
      </section>
    </div>
  );
}
