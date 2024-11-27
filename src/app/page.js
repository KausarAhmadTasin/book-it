import Destinations from "@/components/layouts/Destinations/Destinations";
import ContactSection from "@/components/layouts/ContactSection/ContactSection";
import HotelHighlights from "@/components/layouts/HotelHighlights/HotelHighlights";
import FeaturedRooms from "@/components/layouts/FeaturedRooms/FeaturedRooms";
   
export default function Home() {
  return (
    <div>
      <FeaturedRooms />
     <HotelHighlights />
      <Destinations />
      <ContactSection />

    </div>
)
}
