import connect from "src/lib/dbConnect";
import Appointment from "src/models/Appointment";

// GET Appointment by ID
export async function GET(request, { params }) {
  try {
    await connect();
    const { id } = params;

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return handleError(404, "Appointment not found");
    }

    const appointmentData = {
      ...appointment.toObject(),
      _id: appointment._id.toString(),
      date: appointment.date.toISOString(),
    };

    return new Response(
      JSON.stringify({
        success: true,
        data: appointmentData,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return handleError(500, error.message);
  }
}

// Update Appointment
export async function PUT(request, { params }) {
  try {
    await connect();
    const { id } = params;
    const { date, time } = await request.json();

    if (!date || !time) {
      return handleError(400, "Date and time are required");
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      {
        date: new Date(date),
        time,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedAppointment) {
      return handleError(404, "Appointment not found");
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: updatedAppointment,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return handleError(500, error.message);
  }
}
