// // src/lib/dbConnect.js
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable in .env.local"
//   );
// }

// /**
//  * Global is used here to prevent multiple connections in development.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const options = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(MONGODB_URI, options)
//       .then((mongoose) => {
//         console.log("MongoDB connected successfully"); // Logging successful connection
//         return mongoose;
//       })
//       .catch((error) => {
//         console.error("MongoDB connection failed:", error); // Logging error in case of failure
//         throw error; // Re-throw the error for handling by Next.js
//       });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;

import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("bookItDB");
    return db;
  } catch (error) {
    console.log({ error });
  }
};
