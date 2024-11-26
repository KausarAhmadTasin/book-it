import React from 'react';

const Destinations = () => {
  return (
    <div className=''>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-4 lg:w-1/2">
        <div className="">
  {/* Image 1 - Circular */}
  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg absolute top-12 left-6 z-10">
    <img 
      src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/o470h09p2ukpytv2k4zj.jpg" 
      className="w-full h-full object-cover" 
      alt="" 
    />
  </div>

  {/* Image 2 - Rectangular */}
  <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg absolute top-16 left-10 z-0">
    <img 
      src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1732645531/duqnenhpfiafjycjyjrs.jpg" 
      className="w-full h-full object-cover" 
      alt="" 
    />
  </div>
</div>


</div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-4">
          <p className="uppercase text-red-500 font-bold">Get to know us</p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Plan Your Next Trip with <span className="text-red-500">Tevlo Agency</span>
          </h2>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don’t look even slightly believable.
          </p>

          <p className="text-xl font-semibold text-red-500">
            An Excellent Opportunity to Travel and Experience Adventure
          </p>

          {/* List */}
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-red-500">✔</span> Many variations of passages of Lorem Ipsum
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✔</span> Many variations of passages of Lorem
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✔</span> Expert Many variations Teacher
            </li>
          </ul>

          {/* Button */}
          <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Discover More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Destinations;
