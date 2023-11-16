import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "../../config.env" });

const connection = {};

export const mongoConnect = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.CONNECTION_STRING);
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
