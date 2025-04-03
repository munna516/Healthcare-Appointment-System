import { NextResponse } from "next/server";
import connect from "../../../lib/dbConnect";
import Appointment from "src/models/Appointment";

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const { name, email, phone, department, doctor, date, time, message } =
      body;

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      department,
      doctor,
      date,
      time,
      message: message,
    });

    const savedAppointment = await newAppointment.save();

    return NextResponse.json(
      {
        message: "Appointment booked successfully",
        appointment: savedAppointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment booking error:", error);

    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Invalid appointment data",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Failed to book appointment",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    await connect();

    const appointments = await Appointment.find({ email: email }).sort({
      date: -1,
      time: -1,
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
