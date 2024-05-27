import mongoose from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${(error as Error).message}`);
  }
}
