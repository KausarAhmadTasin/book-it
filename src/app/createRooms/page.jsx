"use client";
import React, { useState } from "react";

const HotelForm = () => {
  const [formData, setFormData] = useState({
    roomId: "",
    hotelName: "",
    address: {
      street: "",
      city: "",
      country: "",
      zipCode: "",
    },
    roomType: "",
    description: "",
    images: [""],
    amenities: [""],
    maxOccupancy: 1,
    bedType: "",
    size: "",
    view: "",
    pricePerNight: 0,
    discount: 0,
    available: true,
    availabilityDates: [""],
    cancellationPolicy: "",
    hotelContact: {
      phone: "",
      email: "",
    },
    hotelRating: 0,
    extras: [""],
    tags: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, field) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (e, field, index) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: updatedArray,
    }));
  };

  const addArrayField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form successfully submitted:", result);
      alert("Room created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to create room.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto my-10 bg-accent shadow-lg rounded-lg p-6 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-primary">
        Hotel Room Form
      </h2>

      {/* Room Details */}
      <div className="space-y-4">
        <input
          type="text"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          placeholder="Room ID"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
        <input
          type="text"
          name="hotelName"
          value={formData.hotelName}
          onChange={handleChange}
          placeholder="Hotel Name"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
      </div>

      {/* Address Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Address</h3>
        <input
          type="text"
          name="street"
          value={formData.address.street}
          onChange={(e) => handleNestedChange(e, "address")}
          placeholder="Street"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={(e) => handleNestedChange(e, "address")}
            placeholder="City"
            className="w-full border-gray-300 rounded-lg shadow-sm p-3"
          />
          <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={(e) => handleNestedChange(e, "address")}
            placeholder="Country"
            className="w-full border-gray-300 rounded-lg shadow-sm p-3"
          />
        </div>
        <input
          type="text"
          name="zipCode"
          value={formData.address.zipCode}
          onChange={(e) => handleNestedChange(e, "address")}
          placeholder="Zip Code"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
      </div>

      {/* Room Details */}
      <div className="space-y-4">
        <input
          type="text"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          placeholder="Room Type"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        ></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="maxOccupancy"
            value={formData.maxOccupancy}
            onChange={handleChange}
            placeholder="Max Occupancy"
            className="w-full border-gray-300 rounded-lg shadow-sm p-3"
          />
          <input
            type="text"
            name="bedType"
            value={formData.bedType}
            onChange={handleChange}
            placeholder="Bed Type"
            className="w-full border-gray-300 rounded-lg shadow-sm p-3"
          />
        </div>
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="Room Size"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
        <input
          type="text"
          name="view"
          value={formData.view}
          onChange={handleChange}
          placeholder="View"
          className="w-full border-gray-300 rounded-lg shadow-sm p-3"
        />
      </div>

      {/* Dynamic Array Fields */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Images</h3>
        {formData.images.map((image, index) => (
          <input
            key={index}
            type="text"
            value={image}
            onChange={(e) => handleArrayChange(e, "images", index)}
            placeholder={`Image URL ${index + 1}`}
            className="w-full border-gray-300 rounded-lg shadow-sm p-3"
          />
        ))}
        <button
          type="button"
          onClick={() => addArrayField("images")}
          className="bg-blue-100 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-200"
        >
          Add Image
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white font-semibold rounded-lg p-3"
      >
        Submit
      </button>
    </form>
  );
};

export default HotelForm;
