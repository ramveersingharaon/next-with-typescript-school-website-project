import mongoose from "mongoose";
const uri =
  "mongodb+srv://ramveersingharaon:2024@cluster0.de1ddi7.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) {
  console.error("MongoDB URI is not defined in environment variables");
  process.exit(1);
}


const DbConnection =async () => {
  try {
   await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default DbConnection;
