import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return   <footer className="bg-[#083246] text-white py-16">
  {/* First row */}
  <div className="container mx-auto px-4 md:px-12 lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-xl font-semibold mb-4">About Us</h3>
      <p className="mb-2">About Us</p>
      <p className="mb-2">Contact</p>
      <p className="mb-2">Careers</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Links</h3>
      <p className="mb-2">Web Development</p>
      <p className="mb-2">App Development</p>
      <p className="mb-2">SEO Services</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <p className="mb-2">Facebook</p>
      <p className="mb-2">Twitter</p>
      <p className="mb-2">LinkedIn</p>
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold mb-4 ">Join Our Community</h3>
      <div className="max-w-screen-xl mx-auto mt-8 text-center">
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md focus:outline-none   text-black"
          />
          <button
            type="submit"
            className="p-2 bg-[#E8F3F3]  text-[#083246] font-semibold  rounded-r-md hover:bg-[#0886a5] hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Divider Line */}
  <div className="w-full border-t border-white my-4"></div>

  {/* Second row (Copyright with Social Media Links) */}
  <div className="py-4 max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row justify-around items-center">
    {/* Copyright Text */}
    <p className="text-sm text-center sm:text-left">
      © 2024 Company Name. All Rights Reserved.
    </p>

    {/* Social Media Links */}
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <a href="https://facebook.com" className="text-white hover:text-blue-600">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" className="text-white hover:text-blue-400">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-blue-700">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</footer>
};

export default Footer;
