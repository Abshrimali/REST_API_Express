import mongoose from "mongoose";

// User schema define karte hain
// Ye batata hai ke database mein user ka structure kaisa hoga
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true }, // User ka first name
    lastName: { type: String, required: true },  // User ka last name
    email: { type: String, required: true, unique: true }, // Email unique honi chahiye
    password: { type: String, required: true },  // Password (hashed hoga)
  },
  { timestamps: true } // createdAt aur updatedAt automatically add honge
);

// Model banate hain jo schema ko database ke saath connect karega
const User = mongoose.model("User", userSchema);
export default User;
