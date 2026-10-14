import { connect } from "mongoose";
import { MONGODB_URI } from "@/config/env.js";

export const connectDB = async () => {
  try {
    const conn = await connect(MONGODB_URI);
    console.log(`Database connected with host ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error occurred when trying to connect to db, ${err}`);
    process.exit(1);
  }
};
