import mongoose from "mongoose";
import "dotenv/config";

async function db() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");

    } catch (error) {
        console.log("Connection Failed", error.message);
        process.exit(1)
        
    }
}

export default db;
