import { FaRegStar } from "react-icons/fa";
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-[#EFF2F6] py-16">
      <div className="container mx-auto text-center px-4">

        {/* Left Side - Section Titles */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-6 md:px-20">
          <div className="md:w-1/2 text-left">
            <h3 className="text-[#00a1b3] font-medium text-sm mb-2">
              Highlights of the Hotel
            </h3>
            <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
              Experience that grows <br className="hidden md:block" /> with your goals.
            </h2>
          </div>

          {/* Right Side - Title or Image */}
          <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0">
            <h3 className="text-lg font-medium text-[#004d61]">
              Our Commitment to Your Well-being
            </h3>
            <p className="text-base md:text-lg text-gray-700 mt-2">
              We aim to provide personalized experiences <br className="hidden md:block" />
              that exceed your expectations and ensure your satisfaction.
            </p>
          </div>
        </div>

        {/* Goals Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Goal 01 */}
          <div className="flex flex-col items-center bg-[#EFF2F6] p-8 rounded-lg ">
            <div className="w-16 h-16 bg-[#004d61] rounded-full mb-6 overflow-hidden">
              <Image
                src="/images/stylish-man.jpg" // Replace with your image path in the 'images' folder
                alt="Man"
                width={16}
                height={16}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-[#004d61] text-lg font-semibold mb-4">
              John Retreat
            </h4>
            <p className="text-gray-600 text-sm">
              Experience unparalleled comfort with modern amenities tailored for your needs.
              Where every detail is crafted for a luxurious stay.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
            </div>
          </div>

          {/* Goal 02 */}
          <div className="flex flex-col items-center bg-[#EFF2F6] p-8 rounded-lg ">
            <div className="w-16 h-16 bg-[#004d61] rounded-full mb-6 overflow-hidden">
              <Image
                src="/images/confident-man.jpg" // Replace with your image path in the 'images' folder
                alt="Man"
                width={16}
                height={16}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-[#004d61] text-lg font-semibold mb-4">
              Isabella
            </h4>
            <p className="text-gray-600 text-sm">
              Create memories that last a lifetime with our unique offerings.
              From fine dining to personalized services, we ensure every moment counts.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
            </div>
          </div>

          {/* Goal 03 */}
          <div className="flex flex-col items-center bg-[#EFF2F6] p-8 rounded-lg ">
            <div className="w-16 h-16 bg-[#004d61] rounded-full mb-6 overflow-hidden">
              <Image
                src="/images/city-girl.jpg" // Replace with your image path in the 'images' folder
                alt="Woman"
                width={16}
                height={16}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-[#004d61] text-lg font-semibold mb-4">
              Olivia
            </h4>
            <p className="text-gray-600 text-sm">
              Your satisfaction is our priority with experiences designed around you.
              Enjoy a stay that feels as unique as your journey.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
              <FaRegStar className="text-yellow-500 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
