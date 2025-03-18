import mongoose from "mongoose";
import env from "../infrastructure/env.js";

async function dbconnection() {
  mongoose
    .connect(env.mongo_uri)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => {
      console.log("error occured while connecting to database", error);
    });
}

export default dbconnection