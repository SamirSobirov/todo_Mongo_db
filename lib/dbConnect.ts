import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

const connection: any = {};
const DB_URI: string = process.env.MONGO_URI as string;

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(DB_URI);


  connection.isConnected = db.connection[0].readyState
}

export default dbConnect