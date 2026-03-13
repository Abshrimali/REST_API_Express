import mongoose from "mongoose";
import "dotenv/config";

// const database = () => {
//     mongoose.connect(process.env.MONGO_URL)
//     .then( () => console.log("database Connected"))
//     .catch( (error) => console.log(`connection failed ${error}`))
// }

// MongoDB Connection
const database = () => {
  mongoose
    .connect("mongodb://localhost:27017/restapi")
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ DB connection error:", err));
};
export default database;
