// src/models/Room.js
import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  hotelName: { type: String, required: true },
  address: {
    street: String,
    city: String,
    country: String,
    zipCode: String,
  },
  roomType: String,
  description: String,
  images: [String],
  amenities: [String],
  maxOccupancy: Number,
  bedType: String,
  size: String,
  view: String,
  pricePerNight: Number,
  discount: Number,
  available: Boolean,
  availabilityDates: [String],
  cancellationPolicy: String,
  hotelContact: {
    phone: String,
    email: String,
  },
  hotelRating: Number,
  extras: [String],
  tags: [String],
});

const Room = mongoose.models.Room || mongoose.model("Room", RoomSchema);

export default Room;
