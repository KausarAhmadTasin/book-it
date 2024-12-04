import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectDB } from "@/lib/dbconnect";

// GET /api/hotels/:hotelId
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const hotelsCollection = db.collection("hotels");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid hotel ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const hotel = await hotelsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!hotel) {
      return NextResponse.json(
        { message: "No hotel found with this ID", error: "Hotel not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(hotel, { status: 200 });
  } catch (error) {
    console.error("Error fetching hotel:", error);
    return NextResponse.json(
      { message: "Failed to fetch hotel", error: error.message },
      { status: 500 }
    );
  }
};

// PUT /api/hotels/:hotelId
export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const hotelsCollection = db.collection("hotels");
    const body = await req.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid hotel ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await hotelsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "No hotel found with this ID", error: "Hotel not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Hotel updated successfully" });
  } catch (error) {
    console.error("Error updating hotel:", error);
    return NextResponse.json(
      { message: "Failed to update hotel", error: error.message },
      { status: 500 }
    );
  }
};

// DELETE /api/hotels/:hotelId
export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const hotelsCollection = db.collection("hotels");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid hotel ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await hotelsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No hotel found with this ID", error: "Hotel not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.error("Error deleting hotel:", error);
    return NextResponse.json(
      { message: "Failed to delete hotel", error: error.message },
      { status: 500 }
    );
  }
};
