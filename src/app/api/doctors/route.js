import { NextResponse } from "next/server";
import connect from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";

// GET API
export async function GET(req) {
  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const skip = (page - 1) * limit;

    const doctors = await Doctor.find().skip(skip).limit(limit);

    return NextResponse.json({ doctors }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching doctors",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const newDoctor = new Doctor(body);

    const savedDoctor = await newDoctor.save();
    return NextResponse.json(
      { message: "Doctor added successfully", doctor: savedDoctor },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding doctor", error: error.message },
      { status: 500 }
    );
  }
}
