import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import database from "./src/config/database.js";
import "dotenv/config"

const app = express();
const port = process.env.PORT
app.use(express.json()); // JSON body parse karne ke liye

// Routes
app.use("/api", userRoutes);

database()

// Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
