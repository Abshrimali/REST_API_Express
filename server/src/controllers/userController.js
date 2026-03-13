import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// CREATE User
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validation: agar koi field missing hai
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    // Duplicate email check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists", success: false });
    }

    // Password hashing (production security)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Naya user banate hain
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    const savedUser = await newUser.save();

    // Response (password return nahi karte)
    res.status(201).json({
      message: "User created successfully",
      success: true,
      data: { id: savedUser._id, firstName, lastName, email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// READ All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // password exclude karte hain
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// READ Single User by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (!user) return res.status(404).json({ message: "User not found", success: false });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// UPDATE User
export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found", success: false });
    res.status(200).json({ message: "User updated successfully", success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// DELETE User
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found", success: false });
    res.status(200).json({ message: "User deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
