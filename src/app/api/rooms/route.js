// src/app/api/rooms/route.js
// Corrected capitalization of dbConnect
import { connectDB } from "@/lib/dbconnect";

// Handle GET request to fetch all rooms
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async () => {
  const db = await connectDB();
  const dbrooms = db.collection("rooms");
  try {
    const rooms = await dbrooms.find().toArray();
    return NextResponse.json(rooms);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "No Data Found", error });
  }
};

export const GET_SINGLE = async (req, { params }) => {
  const { id } = params; // Get the ID from the route parameters
  const db = await connectDB();
  const dbrooms = db.collection("rooms");

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid room ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const room = await dbrooms.findOne({ _id: new ObjectId(id) });

    if (!room) {
      return NextResponse.json(
        { message: "No room found with this ID", error: "Room not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(room, { status: 200 });
  } catch (error) {
    console.error("Error fetching room:", error);
    return NextResponse.json(
      { message: "Failed to fetch room", error: error.message },
      { status: 500 }
    );
  }
};

// POST request to create a new room
export const POST = async (req) => {
  const db = await connectDB();
  const dbrooms = db.collection("rooms");

  try {
    const newRoom = await req.json(); // Get new room data from request body
    const result = await dbrooms.insertOne(newRoom); // Insert new room
    return NextResponse.json({ message: "Room created successfully", result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to create room", error });
  }
};

// PUT request to update a room by roomId
export const PUT = async (req) => {
  const db = await connectDB();
  const dbrooms = db.collection("rooms");

  try {
    const { roomId } = req.query; // Get roomId from query
    const updatedData = await req.json(); // Get updated room data from request body
    const result = await dbrooms.updateOne(
      { roomId },
      { $set: updatedData } // Update room with new data
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({
        message: "No room found with this ID",
        error: "Room not found",
      });
    }

    return NextResponse.json({ message: "Room updated successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to update room", error });
  }
};

// Delete
export const DELETE = async (req, { params }) => {
  const db = await connectDB();
  const dbrooms = db.collection("rooms");

  try {
    const { id } = params; // Extract `id` from the URL

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid room ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await dbrooms.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No room found with this ID", error: "Room not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Room deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting room:", error);
    return NextResponse.json(
      { message: "Failed to delete room", error: error.message },
      { status: 500 }
    );
  }
};
