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
      _id: "1",
      name: "Luxury Suite Apartment",
      price: 160,
      address: "123 Wallaby Avenue, Park Road",
      status: "available",
      amenities: {
        parking: "2 spaces",
        bathroom: "2 rooms",
        bedroom: "4 rooms",
      },
      image_url:
        "https://i.postimg.cc/cCH0LSNG/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
      description:
        "Experience luxury at its finest in this spacious suite, complete with modern decor, a private balcony, and expansive city views. Perfect for those who desire both comfort and elegance.",
    },
    {
      _id: "2",
      name: "Modern Penthouse",
      price: 180,
      address: "789 Skyline Blvd, City Center",
      status: "available",
      amenities: {
        parking: "3 spaces",
        bathroom: "3 rooms",
        bedroom: "5 rooms",
      },
      image_url:
        "https://i.postimg.cc/sDrMsBMp/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg",
      description:
        "This stunning penthouse offers breathtaking views of the skyline, modern design, and expansive living spaces. With luxurious bedrooms and a rooftop terrace, it's ideal for high-end living.",
    },
    {
      _id: "3",
      name: "Cozy Studio Apartment",
      price: 150,
      address: "456 Maple Street, Green View",
      status: "booked",
      amenities: {
        parking: "1 space",
        bathroom: "1 room",
        bedroom: "1 room",
      },
      image_url:
        "https://i.postimg.cc/053Cf0H9/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
      description:
        "A charming and compact studio, perfect for individuals or couples looking for a cozy, functional space. Located in a quiet neighborhood, this apartment is designed for both comfort and convenience.",
    },
    {
      _id: "4",
      name: "Oceanfront Villa",
      price: 200,
      address: "321 Ocean Drive, Beachfront",
      status: "available",
      amenities: {
        parking: "4 spaces",
        bathroom: "4 rooms",
        bedroom: "6 rooms",
      },
      image_url:
        "https://i.postimg.cc/jdPkn1qp/long-nguyen-o9ye4v-Vm-Ft0-unsplash.jpg",
      description:
        "This luxurious oceanfront villa offers panoramic sea views, a private pool, and modern design. Ideal for those seeking an exclusive getaway in a serene and private setting.",
    },
    {
      _id: "5",
      name: "Spacious Family Suite",
      price: 170,
      address: "987 River Road, Green Valley",
      status: "booked",
      amenities: {
        parking: "2 spaces",
        bathroom: "2 rooms",
        bedroom: "3 rooms",
      },
      image_url:
        "https://i.postimg.cc/2j44QNv7/photorealistic-wooden-house-interior-with-timber-decor-furnishings.jpg",
      description:
        "Perfect for families, this suite offers spacious living with separate rooms for parents and children, a cozy living area, and a fully equipped kitchen. Great for a comfortable and enjoyable family vacation.",
    },
    {
      _id: "6",
      name: "Charming Cottage",
      price: 140,
      address: "654 Country Lane, Countryside",
      status: "available",
      amenities: {
        parking: "2 spaces",
        bathroom: "1 room",
        bedroom: "2 rooms",
      },
      image_url:
        "https://i.postimg.cc/LXFJ5hyK/rustic-cottage-forest-glows-with-lantern-light-generated-by-ai.jpg",
      description:
        "This quaint cottage is nestled in the countryside, offering a peaceful retreat with rustic charm. Perfect for couples or small families looking to escape the hustle and bustle of city life.",
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
          <div key={room.id} className="shadow-2xl">
            <div className="w-full shadow-lg rounded-xl">
              <div className="flex w-full justify-between items-center px-4 py-6">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="font-semibold text-[#231F1C] tracking-wide text-2xl">
                      {room.name}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer rounded-md">
                <Image
                  src={room.image_url}
                  alt={room.name}
                  className="w-full h-[350px] object-cover group-hover:scale-[1.1] transition-all duration-500"
                  width={400}
                  height={350}
                />
              </div>
              <div className="p-8 text-[#083247]">
                <div className="bg-[#E9F3F4] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 hover:transition-all hover:duration-500  mx-auto rounded-lg py-2">
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <MdOutlineStarPurple500 className="text-lg" />
                    <p>4.5 (30 reviews)</p>
                  </div>
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <FaLocationDot className="mb-1" />
                    <p>{room.address}</p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center justify-start py-2 px-6">
                      <MdAccessTimeFilled />
                      <p>3 Day </p>
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
                  <Link href={`/RoomDetails/${room._id}`}>
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
