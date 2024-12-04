import { connectDB } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET: Fetch a single room by ID
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const dbrooms = db.collection("rooms");

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

// PUT: Update a single room by ID
export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const dbrooms = db.collection("rooms");
    const updatedData = await req.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid room ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await dbrooms.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "No room found with this ID or no changes were made" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Room updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating room:", error);
    return NextResponse.json(
      { message: "Failed to update room", error: error.message },
      { status: 500 }
    );
  }
};

// DELETE: Delete a single room by ID
export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    const db = await connectDB();
    const dbrooms = db.collection("rooms");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid room ID format", error: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await dbrooms.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No room found with this ID" },
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
