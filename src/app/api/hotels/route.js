import { connectDB } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

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

// PUT /api/hotels/:hotelId
export const PUT = async (req) => {
  const db = await connectDB();
  const hotelsCollection = db.collection("hotels");

  try {
    const { hotelId } = req.query; // Get hotel ID from query params
    const body = await req.json(); // Parse request body

    const result = await hotelsCollection.updateOne(
      { _id: new ObjectId(hotelId) }, // Match by ID
      { $set: body } // Update with new data
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        message: "No hotel found with this ID",
        error: "Hotel not found",
      });
    }

    return NextResponse.json({ message: "Hotel updated successfully" });
  } catch (error) {
    console.error("Error updating hotel:", error);
    return NextResponse.json({ message: "Failed to update hotel", error });
  }
};

// DELETE /api/hotels/:hotelId
export const DELETE = async (req) => {
  const db = await connectDB();
  const hotelsCollection = db.collection("hotels");

  try {
    const { hotelId } = req.query; // Get hotel ID from query params

    const result = await hotelsCollection.deleteOne({
      _id: new ObjectId(hotelId), // Match by ID
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({
        message: "No hotel found with this ID",
        error: "Hotel not found",
      });
    }

    return NextResponse.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error("Error deleting hotel:", error);
    return NextResponse.json({ message: "Failed to delete hotel", error });
  }
};
