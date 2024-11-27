const HotelHighlights = () => {
  return (
    <div className="my-10">
      <h1 className="font-bold text-2xl mb-3">
        Discover Your Perfect Stay: Hotels, Apartments & Resorts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        <div className="w-full rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hotel"
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.3rem] font-bold text-gray-900">Hotels</h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>
            <p className="text-[0.9rem] text-gray-400   mt-2">65 available</p>
          </div>
        </div>
        <div className="w-full rounded-lg  ">
          <img
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="apartment"
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.4rem] font-bold text-gray-900">
              Apartments
            </h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>

            <p className="text-[0.9rem] text-gray-400   mt-2">1 available</p>
          </div>
        </div>
        <div className="w-full rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="resort"
            className="w-full h-[60%] object-cover rounded-lg "
          />

          <div className="py-[10px] pb-[40px] px-[2px] w-full">
            <h3 className="text-[1.4rem] font-bold text-gray-900">Resorts</h3>
            <p className="text-[1rem]  text-gray-400   ">
              30 Nov-5 dec, 2 adults, 1 child
            </p>

            <p className="text-[0.9rem] text-gray-400   mt-2">1 available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHighlights;
