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
      image_url: "https://i.postimg.cc/RZZPSKSy/landscape-modern-city.jpg",
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
      image_url: "https://i.postimg.cc/x8VxnZ83/swimming-pool.jpg",
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
        "https://i.postimg.cc/sXk81X6S/long-shot-facade-cabin-alpe-d-huez-ski-resort-french-alps-sunrise.jpg",
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
    <section>
 
      <h1 className="font-bold text-2xl mb-3">
        Discover Your Perfect Stay: Hotels, Apartments & Resorts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        <div className="w-full rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hotel"
            width={400}
            height={400}
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.3rem] font-bold text-gray-900">Hotels</h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>
            <p className="text-[0.9rem] text-gray-400   mt-2">65 available</p>
          </div>
        </div>
        <div className="w-full rounded-lg  ">
          <Image
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="apartment"
            width={400}
            height={400}
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.4rem] font-bold text-gray-900">
              Apartments
            </h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>

            <p className="text-[0.9rem] text-gray-400   mt-2">1 available</p>
          </div>
        </div>
        <div className="w-full rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="resort"
            width={400}
            height={400}
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.4rem] font-bold text-gray-900">Resorts</h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>

            <p className="text-[0.9rem] text-gray-400   mt-2">1 available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelHighlights;
