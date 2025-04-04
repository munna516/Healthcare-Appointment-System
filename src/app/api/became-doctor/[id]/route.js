import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

// GET Doctor by ID
export async function GET(request, { params }) {
  try {
    await connect();
    const { id } = params;

    const doctor = await Doctors.findById(id);
    if (!doctor) {
      return new Response(JSON.stringify({ error: "Doctor not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(doctor), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
