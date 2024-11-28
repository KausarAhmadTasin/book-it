import { FaLocationDot } from "react-icons/fa6";
import { BsHighlights } from "react-icons/bs";
import Image from "next/image";

const Details = async ({ params }) => {
  const { id } = await params;

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

  const currentRoom = roomsData.find((room) => room._id === id);
  console.log(currentRoom);

  return (
    <section className="bg-[#EEF1F6] flex items-center justify-center min-h-screen">
      <div className="container mx-auto text-[#333335] pt-10">
        <div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="w-full h-[60vh] overflow-hidden rounded-xl">
                <Image
                  className="w-full h-full object-cover"
                  src={currentRoom.image_url}
                  alt="header image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 pt-10 pb-16">
            {/* Room Info */}
            <div className="col-span-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-lg font-semibold">
                <div className="flex gap-2 items-center justify-start pb-2">
                  <FaLocationDot className="mb-1 text-[#083248]" />
                  <p>{`${currentRoom.address.street}, ${currentRoom.address.city}, ${currentRoom.address.country}`}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsHighlights className="text-[#083248]" />
                  <p>Room Highlights</p>
                </div>
                <div className="text-xl font-semibold flex flex-row items-center gap-2"></div>
                <div className="grid grid-cols-2 md:grid-cols-3  items-center font-normal gap-4 tracking-wide">
                  {currentRoom.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-3 text-center rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <hr />
              <div className="text-lg font-semibold space-y-2">
                <p>Description</p>
                <p className="font-normal">{currentRoom.description}</p>
              </div>
              <div className="text-lg font-semibold space-y-2">
                <p>Cancellation Policy</p>
                <p className="font-normal">{currentRoom.cancellationPolicy}</p>
              </div>
              <hr />
            </div>

            {/* Reservetion */}
            <div className="md:col-span-3 order-first md:order-last pb-10">
              <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-[#E9F3F4] p-4 space-y-4 shadow-xl">
                <div className="flex items-center justify-between gap-2">
                  <div className="capitalize text-xl font-semibold">
                    Status: {currentRoom.status}
                  </div>
                  <div className="text-2xl font-semibold">
                    ${currentRoom?.price}{" "}
                    <span className="font-normal">/night</span>
                  </div>
                </div>{" "}
                <hr />
                <div className="space-y-4 tracking-wide">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-semibold">
                    <p>
                      Max Occupancy:{" "}
                      <span className="font-normal">
                        {currentRoom.maxOccupancy}
                      </span>
                    </p>
                    <p>
                      BedType :{" "}
                      <span className="font-normal">{currentRoom.bedType}</span>
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-semibold">
                    <p className="font-normal">{currentRoom.size}</p>
                    <p className="font-normal">{currentRoom.view}</p>
                  </div>
                </div>
                <hr />
                <div className="p-4">
                  <button class="w-full relative px-8 py-2 rounded-xl  bg-[#083248] isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#2E8D9F] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-white">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Details;
