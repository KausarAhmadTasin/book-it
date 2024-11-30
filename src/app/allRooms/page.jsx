"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import {
  MdAccessTimeFilled,
  MdOutlineAccessTime,
  MdOutlineStarPurple500,
} from "react-icons/md";

const Page = () => {
  const [rooms, setRooms] = useState([]); // To store the rooms array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/allrooms.json"); // Fetch the JSON file
        if (!response.ok) throw new Error("Failed to fetch rooms");
        const data = await response.json();

        console.log("Fetched data:", data); // Log fetched data for debugging

        if (data.allRooms && Array.isArray(data.allRooms)) {
          setRooms(data.allRooms);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Failed to load rooms. Please try again later.");
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <section className="container mx-auto pb-16 bg-base-200">
<<<<<<< HEAD
    <div className="py-8">
      <h3 className="text-2xl md:text-3xl text-center text-[#083247] font-semibold pb-4">
        Featured Rooms
      </h3>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-[#333335] capitalize pb-0 md:pb-4">
        Most Favourite Choices
      </h1>
    </div>
  
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center container mx-auto px-4">
      {rooms.map((room) => (
        <div key={room.roomId} className="shadow-2xl rounded-xl overflow-hidden">
          <div className="w-full shadow-lg rounded-xl">
            {/* Room Header */}
            <div className="flex w-full justify-between items-center px-4 py-6">
              <h2 className="font-semibold text-[#231F1C] tracking-wide text-lg md:text-xl">
                {room.hotelName}
              </h2>
            </div>
  
            {/* Room Image */}
            <div className="relative overflow-hidden group cursor-pointer rounded-md">
              {room.images && room.images.length > 0 ? (
                <Image
                  src={room.images[0]}
                  alt={room.roomType || "Room Image"}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover group-hover:scale-110 transition-all duration-500"
                  width={400}
                  height={350}
                />
              ) : (
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gray-300 flex items-center justify-center">
                  <span>No Image Available</span>
                </div>
              )}
            </div>
  
            {/* Room Details */}
            <div className="p-4 md:p-6 lg:p-8 text-[#083247]">
              <div className="bg-[#E9F3F4] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 mx-auto rounded-lg py-2">
                <div className="flex gap-2 items-center justify-start py-2 px-4 md:px-6">
                  <MdOutlineStarPurple500 className="text-lg" />
                  <p>{room.hotelRating} (30 reviews)</p>
                </div>
                <div className="flex gap-2 items-center justify-start py-2 px-4 md:px-6">
                  <FaLocationDot className="mb-1" />
                  <p>{`${room.address.street}, ${room.address.city}, ${room.address.country} - ${room.address.zipCode}`}</p>
                </div>
                <hr />
                <div className="flex items-center justify-between py-2 px-6">
                <div className="flex gap-2 items-center justify-start">
                      <MdAccessTimeFilled />
                      <p>3 Day </p>
                    </div>
                  <div className="text-lg md:text-2xl font-bold py-2 px-6">
                    <p>${room.pricePerNight}</p>
=======
      <div className="py-8">
        <h3 className="text-2xl md:text-3xl text-center text-[#083247] font-semibold pb-4">
          Featured Rooms
        </h3>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-[#333335] capitalize pb-0 md:pb-4">
          Most Favourite Choices
        </h1>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center container mx-auto px-4">
        {rooms.map((room, index) => (
          <div key={room.id || index} className="shadow-2xl">
            <div className="w-full shadow-lg rounded-xl">
              {/* Room details */}
              <div className="flex w-full justify-between items-center px-4 py-6">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="font-semibold text-[#231F1C] tracking-wide text-2xl">
                      {room.name}
                    </h2>
>>>>>>> 5a2c08ede50ba86bce457e2f1538b1ac54ac029d
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="relative overflow-hidden group cursor-pointer rounded-md">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-[350px] object-cover group-hover:scale-[1.1] transition-all duration-500"
                  width={400}
                  height={350}
                />
              </div>
              {/* Details */}
              <div className="p-8 text-[#083247]">
                <div className="bg-[#E9F3F4] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 hover:transition-all hover:duration-500 mx-auto rounded-lg py-2">
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
                      <p>3 Day</p>
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
                  <button
                    type="submit"
                    className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#E4EEEF] backdrop-blur-md lg:font-semibold isolation-auto border-[#E4EEEF] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#083248] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  >
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
