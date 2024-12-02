"use client";
import { useState } from "react";
import { Tangerine } from "next/font/google";

export const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Banner = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    persons: 1,
    dateFrom: "",
    dateTo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search Data:", searchData);
    // Perform search or navigate to search results
  };

  return (
    <div
      className="relative h-[600px] flex justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/qn23PF2/sara-dubler-Koei-7y-Yt-Io-unsplash-2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      {/* Content Section */}
      <div className="relative text-center mt-20 select-none text-white px-4">
        <h1 className={`text-4xl md:text-7xl ${tangerine.className}`}>
          From Check-in to Bliss
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-extralight">
          Discover the best stays for your next adventure.
        </p>
        <p className="mt-2 text-md md:text-lg">
          Plan your dream vacation with ease and comfort.
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Destination Input */}
          <div>
            <label
              htmlFor="destination"
              className="block text-gray-700 font-medium"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={searchData.destination}
              onChange={handleInputChange}
              placeholder="Where to?"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Persons Input */}
          <div>
            <label
              htmlFor="persons"
              className="block text-gray-700 font-medium"
            >
              Persons
            </label>
            <input
              type="number"
              id="persons"
              name="persons"
              value={searchData.persons}
              onChange={handleInputChange}
              min="1"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Date From Input */}
          <div>
            <label
              htmlFor="dateFrom"
              className="block text-gray-700 font-medium"
            >
              Date From
            </label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={searchData.dateFrom}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Date To Input */}
          <div>
            <label htmlFor="dateTo" className="block text-gray-700 font-medium">
              Date To
            </label>
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              value={searchData.dateTo}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSearch}
            // onClick={() => console.log("first")}
            className="px-6 py-2 bg-secondary cursor-pointer text-white font-medium rounded-md active:scale-95"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
