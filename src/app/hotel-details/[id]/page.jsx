import { FaLocationDot } from "react-icons/fa6";
import { BsHighlights } from "react-icons/bs";
import Image from "next/image";

const HotelDetails = async ({ params }) => {
  const { id } = await params;

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

  const currentHotel = hotelData.find((hotel) => hotel._id === id);
  console.log(currentHotel);

  return (
    <section className="bg-[#EEF1F6] flex items-center justify-center min-h-screen">
      <div className="container mx-auto text-[#333335] pt-10">
        <div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8 lg:gap-10 items-center">
            <div className="rounded-lg">
              <div className="w-full  overflow-hidden rounded-xl">
                <Image
                  className="w-full h-full object-cover"
                  src={currentHotel.image_url}
                  alt="header image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="rounded-lg">
              <div className="flex flex-col gap-2 text-lg font-semibold">
                <div className="pb-2">
                  <h2 className="text-2xl md:text-3xl text-[#241F1A]">
                    {currentHotel.hotelName}
                  </h2>
                </div>
                <div className="flex gap-2 items-center justify-start pb-2">
                  <FaLocationDot className="mb-1 text-[#083248]" />
                  <p>{`${currentHotel.address.street}, ${currentHotel.address.city}, ${currentHotel.address.country}`}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsHighlights className="text-[#083248]" />
                  <p>Room Highlights</p>
                </div>
                <div className="text-xl font-semibold flex flex-row items-center gap-2"></div>
                <div className="grid grid-cols-2 md:grid-cols-3  items-center font-normal gap-4 tracking-wide">
                  {currentHotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-3 text-center rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-lg font-semibold space-y-2 pt-6">
                <p>Cancellation Policy</p>
                <p className="font-normal">{currentHotel.cancellationPolicy}</p>
              </div>
              <div className="text-lg font-semibold space-y-2 pt-6">
                <p>Description</p>
                <p className="font-normal">{currentHotel.description}</p>
              </div>
            </div>
          </div>

          <div className="pt-10 pb-16">
            <div className="md:col-span-3 order-first md:order-last pb-10">
              <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-[#EEF1F6] p-4 space-y-4 shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <div className="capitalize text-xl font-semibold">
                    Status: {currentHotel.status}
                  </div>
                  <div className="text-2xl font-semibold">
                    ${currentHotel?.price}{" "}
                    <span className="font-normal">/night</span>
                  </div>
                </div>{" "}
                <hr />
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-semibold">
                  <p>
                    Extras:{" "}
                    <span className="font-normal">{currentHotel.extras}</span>
                  </p>
                  <p>
                    Room Type :{" "}
                    <span className="font-normal">{currentHotel.roomType}</span>
                  </p>
                </div>
                <div className="space-y-4 tracking-wide">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-semibold">
                    <p>
                      Max Occupancy:{" "}
                      <span className="font-normal">
                        {currentHotel.maxOccupancy}
                      </span>
                    </p>
                    <p>
                      BedType :{" "}
                      <span className="font-normal">
                        {currentHotel.bedType}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-semibold">
                    <p>
                      Room Size :{" "}
                      <span className="font-normal">{currentHotel.size}</span>
                    </p>
                    <p>
                      View :{" "}
                      <span className="font-normal">{currentHotel.view}</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="p-4">
                  <button class="w-full relative px-8 py-2 rounded-xl  bg-[#083248] isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#2E8D9F] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-white">
                    {currentHotel.status === "booked" ? "Reserve" : "Book Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
