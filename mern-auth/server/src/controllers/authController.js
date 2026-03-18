import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // 1. Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 2. Check for duplicate email
        const userEmail = await userModel.findOne({ email });
        if (userEmail) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // 3. Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Create User
        const userAdd = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        // 5. Send Clean Response (Exclude the password)
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: userAdd._id,
                name: userAdd.name,
                email: userAdd.email
                // Notice: No password here!
            }
        });

    } catch (error) {
        // 6. Handle errors so the server doesn't hang
        console.error("Internal Server Error:", error.message);
        res.status(500).json({
            message: "Something went wrong on the server",
            error: error.message
        });
    }
}

// Login Controller
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // 2. Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        // 3. Compare Passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        // 4. Send Clean Response (Exclude the password)
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
                // Notice: No password here!
            }
        });


    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({
            message: "Something went wrong on the server",
            error: error.message
        });
    }
}