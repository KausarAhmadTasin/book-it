"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdAccessTimeFilled, MdOutlineAccessTime, MdOutlineStarPurple500 } from "react-icons/md";

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
    <section className="container pb-16 bg-base-200">
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
                <div className="flex items-center justify-between py-4 px-4 md:px-6">
                <div className="flex gap-2 items-center justify-start py-2 px-6">
                      <MdAccessTimeFilled />
                      <p>3 Day </p>
                    </div>
                  <div className="py-2 px-6 text-lg md:text-2xl font-bold">
                    <p>${room.pricePerNight}</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Footer Buttons */}
            <div className="flex items-center justify-between w-full pt-4 pb-6 px-4 md:px-8">
              <div className="flex items-center gap-2 bg-[#E4EEEF] p-2 md:p-4 rounded-full text-[#083248] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105">
                <BsFillInfoCircleFill className="text-lg md:text-xl" />
                <p className="text-sm md:font-bold capitalize">{room.status}</p>
              </div>
              <button
                type="button"
                className="relative z-10 flex justify-center gap-2 items-center text-lg bg-[#E4EEEF] border-2 rounded-full px-4 py-2 shadow-xl group hover:bg-[#083248] hover:text-white transition-all duration-500"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-90 transition-transform"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Page;
