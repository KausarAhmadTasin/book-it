import Testimonials from "@/components/layouts/Testimonials/Testimonials";
import Footer from "@/components/shared/Footer/Footer";
import Destinations from "@/components/layouts/Destinations/Destinations";
import ContactSection from "@/components/layouts/ContactSection/ContactSection";
import HotelHighlights from "@/components/layouts/HotelHighlights/HotelHighlights";
import FeaturedRooms from "@/components/layouts/FeaturedRooms/FeaturedRooms";
import Banner from "@/components/layouts/Banner/Banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedRooms />
      <HotelHighlights />
      <Destinations />
      <ContactSection />
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
  );
}
