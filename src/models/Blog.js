import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      unique: true,
      maxlength: [60, "Title cannot exceed 60 characters"],
    },
    thumbnail: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [120, "Description cannot exceed 120 characters"],
    },
    author: {
      type: String,
      default: "Anonymous",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Health Tech", "Health & Wellness", "Health & Fitness"],
        message: "Invalid category selected",
      },
    },
    date: {
      type: String,
      default: () => new Date().toISOString().split("T")[0],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      maxlength: [1200, "Content cannot exceed 1200 characters"],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
