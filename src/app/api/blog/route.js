import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Blogs from "src/models/Blogs";

export const POST = async (request) => {
  try {
    const { 
        title,
        content,
        imageUrl } = await request.json();

  await connect();
  console.log("DB is connected");

  const newBlog = new Blogs({
    title,
    content,
    imageUrl
  });

    await newBlog.save();
    return NextResponse.json(
      {
        message: "Blog added successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in blog addition:", err);
    if (err.name === 'ValidationError') {
      // This will show exactly which fields failed validation
      const validationErrors = Object.keys(err.errors).map(field => ({
        field,
        message: err.errors[field].message
      }));
      console.error("Validation errors:", validationErrors);
      return NextResponse.json(
        { message: "Validation error", errors: validationErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
};
