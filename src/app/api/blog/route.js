import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Blog from "src/models/Blog";

export const POST = async (request) => {
  try {
    const formData = await request.formData();

    // Extract fields
    const title = formData.get("title");
    const description = formData.get("description");
    const author = formData.get("author");
    const category = formData.get("category");
    const content = formData.get("content");
    const thumbnailUrl = formData.get("thumbnailUrl");
    if (!title || !description || !category || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connect();

    const newBlog = new Blog({
      title,
      thumbnail: thumbnailUrl || null,
      description,
      author: author || "Anonymous",
      category,
      content,
      date: new Date().toISOString().split("T")[0],
    });

    await newBlog.save();

    return NextResponse.json(
      {
        success: true,
        message: "Blog published successfully",
        data: {
          id: newBlog._id,
          title: newBlog.title,
          author: newBlog.author,
          thumbnail: newBlog.thumbnail,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in blog creation:", err);

    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    if (err.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Blog with this title already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
};
