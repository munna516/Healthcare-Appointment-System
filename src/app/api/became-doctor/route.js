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
  
    await newDoctor.save();
    return NextResponse.json(
      {
        message: "Doctor added successfully",
        doctor: {
          id: newDoctor._id,
          email: newDoctor.email,
          phone: newDoctor.phone,
          gender: newDoctor.gender,
          specialization: newDoctor.specialization,
          fee: newDoctor.fee,
          experience: newDoctor.experience,
          bio: newDoctor.bio,
          fullName: newDoctor.fullName,
          licenseNumber: newDoctor.licenseNumber,
          imageUrl: newDoctor.imageUrl
        },
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
