"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button

const FeaturedRooms = () => {
  const [roomsData, setRoomsData] = useState([]);

  // Fetch room data from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rooms");
        const data = await response.json();
        setRoomsData(data); // Update state with the fetched room data
      } catch (error) {
        console.log("Error fetching rooms data:", error);
      }
    };
    fetchRooms();
  }, []);

  // Function to handle delete action
  const handleDelete = async (roomId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/rooms/${roomId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Room deleted successfully!");
        setRoomsData(roomsData.filter((room) => room._id !== roomId));
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting room:", error);
      alert("An error occurred while deleting the room.");
    }
  };

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
                  src={room.images[0]}
                  alt={room.roomType}
                  className="w-full h-[350px] object-cover group-hover:scale-[1.1] transition-all duration-500"
                  width={400}
                  height={350}
                />
              </div>
              <div className="p-8 text-[#083247]">
                <div className="bg-[#E9F3F4] hover:bg-[#083247] transition-all duration-500 hover:text-white ease-out hover:scale-105 hover:transition-all hover:duration-500  mx-auto rounded-lg py-2">
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <MdOutlineStarPurple500 className="text-lg" />
                    <p>{room.hotelRating}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-start py-2 px-6">
                    <FaLocationDot className="mb-1" />
                    <p>{room.address.city}</p>
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
                {/* Delete Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleDelete(room._id)} // Trigger the delete function
                    className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
                  >
                    <FaTrashAlt className="text-xl" />
                    <span>Delete</span>
                  </button>
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
