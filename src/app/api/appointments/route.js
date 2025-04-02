import { NextResponse } from "next/server";
import Appointment from "src/models/Appointment";
import connect from "src/lib/dbConnect";

export async function GET(req) {
  await connect();
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }
  try {
    const userAppointments = await Appointment.find({ email: email }).sort({
      date: -1,
      time: -1,
    });
    return NextResponse.json(userAppointments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message, message: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
