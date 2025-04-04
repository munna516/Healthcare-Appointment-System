import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

export const POST = async (request) => {
  try {
    const { 
      email,
      phone,
      gender,
      specialization,
      fee,
      experience,
      bio,
      fullName,
      licenseNumber,
      imageUrl ,
      registered
    } = await request.json();

    await connect();
    console.log("DB is connected");

    const newDoctor = new Doctors({
      email,
      phone,
      gender,
      specialization,
      fee,
      experience,
      bio,
      fullName,
      licenseNumber,
      imageUrl,
      registered
    });

    await newDoctor.save();
    return NextResponse.json(
      {
        message: "Doctor added successfully",
        doctor: newDoctor,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in doctor registration:", err);
    if (err.name === "ValidationError") {
      const validationErrors = Object.keys(err.errors).map((field) => ({
        field,
        message: err.errors[field].message,
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

// GET function to fetch all doctors
export const GET = async () => {
  try {
    await connect();
    console.log("DB is connected");

    const doctors = await Doctors.find();
    
    return NextResponse.json(
      {
        message: "Doctors fetched successfully",
        doctors,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return NextResponse.json(
      { message: "Error fetching doctors", error: error.message },
      { status: 500 }
    );
  }
};
