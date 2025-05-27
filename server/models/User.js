import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Fixed: "__id" → "_id" (Mongoose convention)
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Reference to a 'Course' model
      },
    ],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);
export default User;