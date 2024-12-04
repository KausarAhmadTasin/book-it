import { connectDB } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// GET /api/hotels
export const GET = async () => {
  const db = await connectDB();
  const hotelsCollection = db.collection("hotels");

  try {
    const hotels = await hotelsCollection.find().toArray(); // Retrieve all hotels
    return NextResponse.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json({ message: "Failed to fetch hotels", error });
  }
};

// POST /api/hotels
export const POST = async (req) => {
  const db = await connectDB();
  const hotelsCollection = db.collection("hotels");

  try {
    const body = await req.json(); // Parse request body
    const result = await hotelsCollection.insertOne(body); // Insert new hotel

    return NextResponse.json({
      message: "Hotel added successfully",
      hotelId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding hotel:", error);
    return NextResponse.json({ message: "Failed to add hotel", error });
  }
};
