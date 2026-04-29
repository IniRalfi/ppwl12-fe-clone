import { Logo } from "../components/Logo";
import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/experiences/ExperienceSection";
import { experiencesData } from "@/data/experiencesData";
import { homesData } from "@/data/homesData";
import { servicesData } from "@/data/servicesData";

export default function ComponentTesting() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🛠️ Component Testing Playground
        </h1>
        <p className="text-gray-600 mt-2">
          Tempat untuk tes dan melihat render spesifik tiap komponen. 
          Teman-teman bisa nambahin komponen miliknya di bawah ini ya!
        </p>
      </div>

      {/* 1. Test Logo */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          1. Logo Component
        </h2>
        <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center">
          <Logo />
        </div>
      </section>

      {/* 2. Test Navbar */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          2. Navbar Component
        </h2>
        <div className="bg-white rounded-lg border">
          <Navbar isScrolled={false} onSectionClick={() => console.log("Section Clicked!")} />
        </div>
      </section>

      {/* 3. Test ExperienceSection (Adella) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          3. ExperienceSection Component (Adella)
        </h2>
        <div className="bg-white rounded-lg border">
          <ExperienceSection
            homesData={homesData}
            experiencesData={experiencesData}
            servicesData={servicesData}
          />
        </div>
      </section>

    </div>
  );
}