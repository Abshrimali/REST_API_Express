import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// REST API endpoints
router.post("/users", createUser);     // Create user
router.get("/users", getUsers);        // Get all users
router.get("/users/:id", getUserById); // Get single user
router.put("/users/:id", updateUser);  // Update user
router.delete("/users/:id", deleteUser); // Delete user

export default router;
