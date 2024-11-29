import Image from "next/image";
import Link from "next/link";
import { MdEventAvailable } from "react-icons/md";

const HotelHighlights = () => {
  // Hotel data
  const hotelData = [
    {
      _id: "1",
      roomId: "room7",
      hotelName: "Skyline City Apartments",
      address: {
        street: "101 Cityscape Drive",
        city: "Chicago",
        country: "USA",
        zipCode: "60616",
      },
      roomType: "Executive Suite",
      description:
        "An elegant apartment offering panoramic city views and modern comforts.",
      image_url:
        "https://i.postimg.cc/cCH0LSNG/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
      amenities: [
        "WiFi",
        "Air Conditioning",
        "TV",
        "Kitchenette",
        "Room Service",
      ],
      maxOccupancy: 3,
      bedType: "King",
      status: "available",
      size: "650 sqft",
      view: "City Skyline",
      price: 200,
      discount: 15,
      available: true,
      availabilityDates: ["2024-11-29", "2024-11-30", "2024-12-01"],
      cancellationPolicy: "Free cancellation up to 24 hours before check-in.",
      hotelContact: {
        phone: "+1-312-456-7890",
        email: "info@skylineapartments.com",
      },
      hotelRating: 4.6,
      hotelReviews: 34,
      extras: ["Breakfast included", "Parking available"],
      tags: ["Urban", "Luxury", "Family Friendly"],
    },
    {
      _id: "2",
      roomId: "room8",
      hotelName: "Tropical Beach Resort",
      address: {
        street: "567 Paradise Lane",
        city: "Honolulu",
        country: "USA",
        zipCode: "96815",
      },
      roomType: "Beach Villa",
      description:
        "A luxurious beachfront villa with direct access to the sandy shores.",
      image_url:
        "https://i.postimg.cc/cCH0LSNG/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
      amenities: ["WiFi", "Air Conditioning", "TV", "Private Pool", "Jacuzzi"],
      maxOccupancy: 4,
      bedType: "Queen",
      status: "booked",
      size: "1000 sqft",
      view: "Oceanfront",
      price: 500,
      discount: 20,
      available: true,
      availabilityDates: ["2024-12-01", "2024-12-02"],
      cancellationPolicy: "Non-refundable",
      hotelContact: {
        phone: "+1-808-987-6543",
        email: "reservations@tropicalbeachresort.com",
      },
      hotelRating: 4.8,
      hotelReviews: 50,
      extras: ["Private chef service", "Spa access"],
      tags: ["Beachfront", "Luxury", "Romantic"],
    },
    {
      _id: "3",
      roomId: "room9",
      hotelName: "Alpine Lodge Resort",
      address: {
        street: "789 Glacier Peak Road",
        city: "Anchorage",
        country: "USA",
        zipCode: "99501",
      },
      roomType: "Cabin Suite",
      description:
        "A charming alpine cabin with rustic décor and breathtaking mountain views.",
      image_url:
        "https://i.postimg.cc/cCH0LSNG/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
      amenities: ["WiFi", "Fireplace", "TV", "Hot Tub", "Ski-In/Ski-Out"],
      maxOccupancy: 2,
      bedType: "Queen",
      status: "available",
      size: "700 sqft",
      view: "Mountain View",
      price: 350,
      discount: 10,
      available: true,
      availabilityDates: ["2024-11-30", "2024-12-01", "2024-12-02"],
      cancellationPolicy: "Free cancellation up to 72 hours before check-in.",
      hotelContact: {
        phone: "+1-907-456-1234",
        email: "info@alpinelodgeresort.com",
      },
      hotelRating: 4.7,
      hotelReviews: 45,
      extras: ["Breakfast included", "Hiking tours"],
      tags: ["Mountain Retreat", "Cozy", "Nature Friendly"],
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="my-10">
        <div className="pb-8">
          <h3 className="text-2xl text-center text-[#083247] font-semibold pb-4">
            Discover Your Perfect Stay
          </h3>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-[#333335] capitalize pb-0 md:pb-4">
            Hotels, Apartments & Resorts
          </h1>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4">
          {hotelData.map((hotel) => (
            <div key={hotel._id} className="shadow-xl rounded-xl">
              <Link href={`/hotel-details/${hotel._id}`}>
                <div className="w-full rounded-lg">
                  <div className="relative overflow-hidden group cursor-pointer">
                    <Image
                      src={hotel.image_url}
                      alt={hotelData.hotelName}
                      className="w-full h-[60%] group-hover:scale-[1.1] transition-all duration-500 rounded-lg"
                      width={400}
                      height={400}
                    />{" "}
                  </div>
                  <div className="py-[10px] p-4  w-full space-y-2">
                    <h3 className="text-[1.3rem] font-semibold text-[#333335]">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-[1rem] text-gray-700">
                      30 Nov-5 dec, 2 adults, 1 child
                    </p>
                    <p className="text-[0.9rem] text-gray-700 flex items-center justify-start gap-2 w-full pb-2">
                      <MdEventAvailable className="text-xl text-[#083247]" />
                      <p>{hotel.availabilityDates.length} available</p>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelHighlights;
