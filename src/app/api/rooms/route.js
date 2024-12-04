import { connectDB } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

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
