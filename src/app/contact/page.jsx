// pages/contact.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { RiMessengerFill, RiTelegramFill } from 'react-icons/ri';

const ContactPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const faqData = [
    {
      question: 'Can I add multiple products to my cart?',
      answer: 'Yes, you can add as many products as you like to your cart, and they will all be stored until you are ready to check out.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer international shipping to many countries. Shipping rates and times vary depending on your location.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, we will send you a tracking number via email, so you can track your package in real-time.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on most products. Make sure the product is in its original condition, and we’ll refund your purchase.',
    },
    {
      question: 'Can I edit my account details?',
      answer: 'Yes, you can update your account information by going to your account settings after logging in.',
    },
  ];

  return (
    <div>
      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row lg:mx-20">
        <div className="mx-auto p-6 w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            The online store of equipment and electronics is one of the leading online stores.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F1C]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F1C]"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F1C]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F1C] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#231F1C] hover:bg-[#083247] text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center lg:w-1/3 mt-6 lg:mt-0">
          <Image
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730214440/p9dkgcqidtlhsgzayyle.png" // Update with your public image path
            className="h-auto max-w-full"
            alt="Contact Us Illustration"
            width={500} // Example dimensions
            height={500} // Example dimensions
            priority
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-wrap items-start lg:mx-20 md:mx-10 mx-2 lg:mt-10">
        <div className="flex flex-col w-full lg:w-2/3 mb-8">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="w-full">
            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white shadow-md rounded-lg p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mt-2 rounded-lg">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="w-full lg:w-1/3 px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-blue-500 mr-3" />
                <span>(208) 555-0112</span>
              </div>
              <div className="flex items-center">
                <RiMessengerFill className="w-6 h-6 text-blue-500 mr-3" />
                <span>Messenger</span>
              </div>
              <div className="flex items-center">
                <RiTelegramFill className="w-6 h-6 text-blue-400 mr-3" />
                <span>Telegram</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="w-6 h-6 text-orange-500 mr-3" />
                <span>Email: support@store.com</span>
              </div>
            </div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <FaFacebookF className="w-6 h-6 text-blue-600" />
              <FaInstagram className="w-6 h-6 text-pink-600" />
              <RiTelegramFill className="w-6 h-6 text-blue-400" />
              <FaTwitter className="w-6 h-6 text-blue-400" />
              <FaLinkedinIn className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="container bg-gray-50 p-6 rounded-md mt-6 lg:mx-20">
        <h3 className="text-xl font-bold">We're Here to Help You!</h3>
        <p className="text-gray-700 mt-4">
          Customer satisfaction is our top priority. Whether you need assistance with product selection, order tracking, or any other inquiries, our dedicated team is ready to help.
        </p>
        <button
          onClick={handleReadMore}
          className="mt-3 px-4 py-2 bg-[#231F1C] text-white rounded hover:bg-[#083247]"
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
        {showMore && (
          <p className="text-gray-700 mt-4">
            Our knowledgeable team provides tailored assistance to ensure a smooth shopping experience. Reach out with any questions or feedback.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
