import {  NextResponse } from 'next/server';
import connect from "../../../lib/dbConnect";
import Appointment from 'src/models/Appointment';

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      department, 
      doctor, 
      date, 
      time, 
      message 
    } = body;

    // const timeNumber = parseFloat(time);

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
        appointment: savedAppointment
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Appointment booking error:', error);

    if (error.name === 'ValidationError') {
      return NextResponse.json(
        {
          message: 'Invalid appointment data',
          errors: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Failed to book appointment',
        error: error.message
      },
      { status: 500 }
    );
  }
}