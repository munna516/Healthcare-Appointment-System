import { getServerSession } from "next-auth/next";
import { authOptions } from "src/lib/authOptions";
import Payment from "src/models/Payment";
import connect from "src/lib/dbConnect";
import Appointment from "src/models/Appointment";

export async function POST(req) {
  try {
    const body = await req.json();

    await connect();

    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { 
      paymentIntentId, 
      appointmentId, 
      patientName, 
      doctor, 
      department, 
      appointmentDate, 
      appointmentTime,
      amount 
    } = body;

    if (!paymentIntentId || !appointmentId) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const payment = new Payment({
      appointmentId,
      patientEmail: session.user.email,
      patientName,
      doctor,
      department,
      appointmentDate,
      appointmentTime,
      amount,
      paymentIntentId,
      paymentStatus: 'succeeded',
    });

    await payment.save();

    await Appointment.findByIdAndUpdate(appointmentId, {
      paymentStatus: 'paid',
      paymentId: payment._id,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Payment recorded successfully',
      payment
    }), { status: 200 });

  } catch (error) {
    console.error('Error saving payment details:', error);
    return new Response(JSON.stringify({ message: 'Error saving payment details', error: error.message }), { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return new Response(JSON.stringify({ message: "Email query parameter is required" }), { status: 400 });
    }

    await connect();

    const payments = await Payment.find({ patientEmail: email }).sort({ paymentDate: -1 });

    return new Response(JSON.stringify(payments), { status: 200 });
  } catch (error) {
    console.error("Error fetching payment history:", error);
    return new Response(JSON.stringify({ message: "Error fetching payment history", error: error.message }), { status: 500 });
  }
}
