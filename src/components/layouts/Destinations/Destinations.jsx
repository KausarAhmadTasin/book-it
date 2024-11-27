'use client'; // Add this line at the top

import Image from 'next/image';
import React, { useRef } from 'react';

const Destinations = () => {
  const destinations = [
    { id: 1, name: 'Egypt', tours: '7 TOURS', image: 'https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/cqnwrpg1edw0duk5yd57.jpg' },
    { id: 2, name: 'England', tours: '10 TOURS', image: 'https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/ywmsejnanywpdwmommze.jpg' },
    { id: 3, name: 'Sweden', tours: '12 TOURS', image: 'https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/zj7km4amjxqvyzcwyvzl.jpg' },
    { id: 4, name: 'Dubai', tours: '7 TOURS', image: 'https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/beft53oriboiwbsvpxxz.jpg' },
    { id: 5, name: "India", tours: "15 TOURS", image: "https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/uzyhpja36wphu6ohi8iv.jpg" },
    { id: 6, name: "France", tours: "9 TOURS", image: "https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/qnseqqkebhcl1jshphda.jpg" },
    { id: 7, name: "Japan", tours: "8 TOURS", image: "https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/zapvjhje7offkggctrlx.jpg" },
  ];

  const containerRef = useRef(null);

  // Scroll handler function
  function scrollHorizontally(amount) {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="">
              <h1 className='text-center lg:text-5xl text-xl font-semibold '>Destinations Nearby</h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 gap-4">
            <div className="hidden lg:inline-block md:inline-block absolute top-0 left-6 z-10">
              <div className="w-52 h-60 lg:ml-20 md:-ml-28 rounded-[90px] overflow-hidden shadow-lg bg-white border-[22px] border-white">
                <Image
                  src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/o470h09p2ukpytv2k4zj.jpg"
                  className="w-full h-full object-cover "
                  width={200}
                  height={200}
                  alt="Circular Travel"
                />
              </div>
            </div>
            <div className="w-[280px] h-[320px] lg:ml-48 sm:w-[350px] sm:h-[400px] lg:w-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg z-0">
              <Image
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/duqnenhpfiafjycjyjrs.jpg"
                className="w-full h-full object-cover"
                width={200}
                  height={200}
                alt="Rectangular Travel"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <p className="uppercase text-[#083246] font-bold">Get to know us</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Plan Your Next Trip with <br /><span className="text-[#083246]">Tevlo Agency</span>
            </h2>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don’t look even slightly believable.
            </p>

            <p className="text-xl font-semibold text-[#083246]">
              An Excellent Opportunity to Travel and Experience Adventure
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 md:justify-center lg:justify-start">
                <span className="text-[#083246]">✔</span> Many variations of passages of Lorem Ipsum
              </li>
              <li className="flex items-center gap-2 md:justify-center lg:justify-start">
                <span className="text-[#083246]">✔</span> Many variations of passages of Lorem
              </li>
              <li className="flex items-center gap-2 md:justify-center lg:justify-start">
                <span className="text-[#083246]">✔</span> Expert Many variations Teacher Lorem
              </li>
            </ul>

            <div className="flex justify-center lg:justify-start">
              <button className="mt-4 px-6 py-2 bg-[#083246] text-white rounded-md hover:bg-[#0886a5]">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:-ml-36  px-4 mb-8 md:mb-0">
          <div className="flex flex-col items-start p-6 bg-white rounded-lg max-w-sm mx-auto">
            <span className="text-sm font-bold uppercase text-[#083246] tracking-wider mb-2">Destination List</span>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Explore the Beautiful Places Around World
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Flexible Classes refers to the process of acquiring knowledge freely.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#083246] text-white rounded-md hover:bg-[#0886a5]">
                Discover More
              </button>
          </div>
        </div>

        <div className="relative w-full lg:-ml-52 md:w-2/3">
          {/* Horizontal Scroll Container */}
          <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          Explore Destinations
        </h2>

        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-scroll lg:-ml-14 ">
          <div
            className="grid grid-flow-col auto-cols-[calc(100%-16px)] sm:auto-cols-[calc(50%-16px)] 
                    lg:auto-cols-[calc(26%-20px)] gap-4 px-4"
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group relative h-64   rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className=" w-96 h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width={200}
                  height={200}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#E8F3F3] text-[083246] text-sm font-semibold rounded-full shadow">
                  {destination.tours}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

         
        </div>
      </div>
    </div>
  );
};

export default Destinations;
