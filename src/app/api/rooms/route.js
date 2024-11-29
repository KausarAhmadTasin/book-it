// src/app/api/rooms/route.js
// Corrected capitalization of dbConnect
import dbConnect from "@/lib/dbconnect";
import Room from "../../../models/rooms";

// Handle GET request to fetch all rooms
export async function GET() {
  await dbConnect();

  try {
    const rooms = await Room.find().toArray(); // Fetch all rooms from the database
    return new Response(rooms);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch rooms" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle POST request to add a new room
export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json(); // Parse the incoming request body
    const newRoom = await Room.create(body); // Save new room to the database
    return new Response(JSON.stringify(newRoom), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create room" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
