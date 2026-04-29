import { Logo } from "../components/Logo";
import Navbar from "@/components/Navbar";
import StickyTabs from "@/components/listing/StickyTabs";
import ImageGallery from "@/components/listing/ImageGallery";
import { listingImages } from "@/data/listingImages";

export default function ComponentTesting() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🛠️ Component Testing Playground
        </h1>
      </div>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          1. Logo Component
        </h2>
        <Logo />
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          2. Navbar
        </h2>
        <Navbar
          isScrolled={false}
          onSectionClick={() => console.log("Section Clicked!")}
        />
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
          3. Image Gallery + Sticky Tabs
        </h2>

        <StickyTabs />

        <div className="mt-6">
          <ImageGallery images={listingImages} />
        </div>
      </section>
    </div>
  );
}