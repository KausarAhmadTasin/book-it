import ContactSection from "@/components/layouts/ContactSection/ContactSection";
import HotelHighlights from "@/components/layouts/HotelHighlights/HotelHighlights";

export default function Home() {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <HotelHighlights />
      <ContactSection />
    </div>
  );
}
