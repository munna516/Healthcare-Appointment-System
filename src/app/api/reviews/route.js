
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import { connect } from "@/lib/database";
import connect from "src/lib/dbConnect";
import Review from "src/models/Review";


export async function POST(request) {
  try {
    const session = await getServerSession();
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "You must be logged in to submit a review" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { 
      appointmentId, 
      userEmail, 
      reviewText, 
      department, 
      doctor 
    } = body;

    await connect();

    const newReview = new Review({
      appointmentId,
      userEmail,
      reviewText,
      department,
      doctor,
      createdAt: new Date(),
    });

    await newReview.save();

    return NextResponse.json(
      { success: true, message: "Review submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}