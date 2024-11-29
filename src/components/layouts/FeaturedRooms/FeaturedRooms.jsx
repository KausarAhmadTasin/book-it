"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const FeaturedRooms = () => {
  // Custom Room Data
  const roomsData = [
    {
      _id: "01",
      roomId: "room1",
      hotelName: "Luxury Suite Apartment",
      address: {
        street: "123 Main Street",
        city: "Los Angeles",
        country: "USA",
        zipCode: "90001",
      },
      roomType: "Deluxe Suite",
      description:
        "A spacious deluxe suite with stunning sea views and modern amenities.",
      image_url:
        "https://i.postimg.cc/cCH0LSNG/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
      amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar", "Room Service"],
      maxOccupancy: 3,
      bedType: "King",
      status: "booked",
      size: "500 sqft",
      view: "Sea View",
      price: 250,
      discount: 20,
      available: true,
      availabilityDates: ["2024-11-27", "2024-11-28", "2024-12-01"],
      cancellationPolicy: "Free cancellation up to 24 hours before check-in.",
      hotelContact: {
        phone: "+1-234-567-890",
        email: "contact@grandpalacehotel.com",
      },
      hotelRating: 4.8,
      hotelReviews: 30,
      extras: ["Breakfast included", "Airport transfer"],
      tags: ["Luxury", "Family Friendly", "Beachfront"],
    },
    {
      _id: "2",
      roomId: "room2",
      hotelName: "Modern Penthouse",
      address: {
        street: "456 Beach Avenue",
        city: "Miami",
        country: "USA",
        zipCode: "33139",
      },
      roomType: "Executive Room",
      description:
        "A luxurious executive room with a breathtaking beach view and premium facilities.",
      image_url:
        "https://i.postimg.cc/sDrMsBMp/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg",
      amenities: ["WiFi", "Air Conditioning", "TV", "Coffee Maker", "Balcony"],
      maxOccupancy: 2,
      bedType: "Queen",
      status: "available",
      size: "400 sqft",
      view: "Beach View",
      price: 180,
      discount: 10,
      available: true,
      availabilityDates: ["2024-11-27", "2024-11-28", "2024-11-30"],
      cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
      hotelContact: {
        phone: "+1-305-678-1234",
        email: "info@oceanbreezeresort.com",
      },
      hotelRating: 4.5,
      hotelReviews: 26,
      extras: ["Breakfast included"],
      tags: ["Luxury", "Romantic", "Beachfront"],
    },
    {
      _id: "3",
      roomId: "room3",
      hotelName: "Cozy Studio Apartment",
      address: {
        street: "789 Highland Road",
        city: "Denver",
        country: "USA",
        zipCode: "80202",
      },
      roomType: "Honeymoon Suite",
      description:
        "A charming suite with a cozy fireplace and stunning mountain views.",
      image_url:
        "https://i.postimg.cc/053Cf0H9/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
      amenities: ["WiFi", "Fireplace", "TV", "Hot Tub", "Room Service"],
      maxOccupancy: 2,
      bedType: "King",
      status: "available",
      size: "600 sqft",
      view: "Mountain View",
      price: 300,
      discount: 15,
      available: true,
      availabilityDates: ["2024-11-29", "2024-11-30", "2024-12-01"],
      cancellationPolicy: "Free cancellation up to 24 hours before check-in.",
      hotelContact: {
        phone: "+1-720-234-5678",
        email: "stay@mountainbliss.com",
      },
      hotelRating: 4.2,
      hotelReviews: 42,
      extras: ["Breakfast included", "Spa access"],
      tags: ["Romantic", "Mountain Retreat", "Luxury"],
    },
    {
      _id: "4",
      roomId: "room4",
      hotelName: "Oceanfront Villa",
      address: {
        street: "321 Ocean Drive",
        city: "San Diego",
        country: "USA",
        zipCode: "92101",
      },
      roomType: "Luxury Villa",
      description:
        "A private villa offering unparalleled oceanfront views and lavish amenities.",
      image_url:
        "https://i.postimg.cc/jdPkn1qp/long-nguyen-o9ye4v-Vm-Ft0-unsplash.jpg",
      amenities: ["WiFi", "Air Conditioning", "TV", "Private Pool", "Jacuzzi"],
      maxOccupancy: 6,
      bedType: "Multiple",
      status: "booked",
      size: "1200 sqft",
      view: "Oceanfront",
      price: 800,
      discount: 25,
      available: true,
      availabilityDates: ["2024-12-01", "2024-12-02"],
      cancellationPolicy: "Non-refundable",
      hotelContact: {
        phone: "+1-619-234-5678",
        email: "contact@oceanvillaresort.com",
      },
      hotelRating: 4.9,
      extras: ["Private chef service", "Daily housekeeping"],
      tags: ["Luxury", "Private", "Beachfront"],
    },
    {
      _id: "5",
      roomId: "room5",
      hotelName: "Spacious Family Suite",
      address: {
        street: "654 Park Avenue",
        city: "New York",
        country: "USA",
        zipCode: "10022",
      },
      roomType: "Family Suite",
      description:
        "A spacious family suite with modern design and kid-friendly amenities.",
      image_url:
        "https://i.postimg.cc/2j44QNv7/photorealistic-wooden-house-interior-with-timber-decor-furnishings.jpg",
      amenities: ["WiFi", "Air Conditioning", "TV", "Kids Area", "Mini Bar"],
      maxOccupancy: 4,
      bedType: "Double and Twin",
      status: "available",
      size: "700 sqft",
      view: "City View",
      price: 300,
      discount: 15,
      available: true,
      availabilityDates: ["2024-11-27", "2024-11-28"],
      cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
      hotelContact: {
        phone: "+1-212-567-8901",
        email: "family@cityhotel.com",
      },
      hotelRating: 4.8,
      hotelReviews: 22,
      extras: ["Breakfast included", "Late checkout"],
      tags: ["Family Friendly", "Urban", "Spacious"],
    },
    {
      _id: "6",
      roomId: "room6",
      hotelName: "Charming Cottage",
      address: {
        street: "987 Forest Trail",
        city: "Aspen",
        country: "USA",
        zipCode: "81611",
      },
      roomType: "Rustic Cottage",
      description:
        "A cozy rustic cottage nestled in the woods with picturesque surroundings.",
      image_url:
        "https://i.postimg.cc/LXFJ5hyK/rustic-cottage-forest-glows-with-lantern-light-generated-by-ai.jpg",
      amenities: ["WiFi", "Fireplace", "TV", "Outdoor Seating", "Pet Friendly"],
      maxOccupancy: 4,
      bedType: "Queen and Sofa Bed",
      status: "available",
      size: "800 sqft",
      view: "Forest View",
      price: 250,
      discount: 10,
      available: true,
      availabilityDates: ["2024-11-29", "2024-11-30", "2024-12-01"],
      cancellationPolicy: "Free cancellation up to 72 hours before check-in.",
      hotelContact: {
        phone: "+1-970-456-7890",
        email: "reservations@forestcottage.com",
      },
      hotelRating: 4.3,
      hotelReviews: 57,
      extras: ["Breakfast included", "Hiking guides"],
      tags: ["Nature Retreat", "Cozy", "Pet Friendly"],
    },
  ];

  return (
    <section className="pb-16 bg-base-200">
      {/* Featured Rooms Title Section */}
      <div className="py-8">
        <h3 className="text-3xl md:text-2xl text-center text-[#083247] font-semibold pb-4">
          Featured Rooms
        </h3>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-[#333335] capitalize pb-0 md:pb-4">
          Most Favourite Choices
        </h1>
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center container mx-auto px-4">
        {roomsData.map((room) => (
          <div key={room._id} className="shadow-2xl">
            <div className="w-full shadow-lg rounded-xl">
              <div className="flex w-full justify-between items-center px-4 py-6">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="font-semibold text-[#231F1C] tracking-wide text-2xl">
                      {room.hotelName}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer rounded-md">
                <Image
                  src={room.image_url}
                  alt={room.hotelName}
                  className="w-full h-[350px] object-cover group-hover:scale-[1.1] transition-all duration-500"
                  width={400}
                  height={350}
                />
              </div>
              <div className="p-8 text-[#083247]">
                <div className="bg-[#E9F3F4] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 hover:transition-all hover:duration-500  mx-auto rounded-lg py-2">
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <MdOutlineStarPurple500 className="text-lg" />
                    <p>
                      {room.hotelRating} ({room.hotelReviews} reviews)
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <FaLocationDot className="mb-1" />
                    <p>{`${room.address.street}, ${room.address.city}, ${room.address.country}`}</p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center justify-start py-2 px-6">
                      <MdAccessTimeFilled />
                      <p>3 Nights</p>
                    </div>
                    <div className="py-2 px-6 text-2xl font-bold">
                      <p>${room.price}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Details Button */}
              <div className="flex items-center justify-between w-full pt-0 pb-6 px-8">
                <div className="flex items-center gap-2 bg-[#E4EEEF] p-4 rounded-full text-[#083248] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 hover:transition-all hover:duration-500">
                  <BsFillInfoCircleFill className="text-xl" />
                  <p className="text-sm font-bold capitalize tracking-wide">
                    {room.status}
                  </p>
                </div>
                <div>
                  <Link href={`/room-details/${room._id}`}>
                    <button
                      type="submit"
                      className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#E4EEEF] backdrop-blur-md lg:font-semibold isolation-auto border-[#E4EEEF] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#083248] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    >
                      {/* Explore */}
                      <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
