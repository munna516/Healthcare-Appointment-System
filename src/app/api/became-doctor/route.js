import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

export const POST = async (request) => {
  try {
    const { email,
          phone,
          gender,
          specialization,
          fee,
          experience,
          bio,
          fullName,
          licenseNumber,
          imageUrl } = await request.json();

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
    imageUrl
  });
    console.log(newDoctor);
    await newDoctor.save();
    return NextResponse.json(
      {
        message: "Doctor added successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in doctor registration:", err);
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
