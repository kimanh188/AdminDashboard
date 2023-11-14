import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "../../config.env" });

const connection = {};

console.log(process.env.CONNECTION_STRING);

export const mongoConnect = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://testUser:test12345@cluster0.djgqpk3.mongodb.net/dashboard?retryWrites=true&w=majority"
    );
    connection.isConnected = db.connections[0].readyState;
    /* readyStates:
    0: disconnected
    1: connected
    2: connecting
    3: disconnecting */
  } catch (error) {
    console.log(error.message);
  }
};
