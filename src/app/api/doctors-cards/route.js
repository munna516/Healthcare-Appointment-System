import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

export async function GET() {
  try {
    await connect();
    const doctors = await Doctors.find(
      { registered: true },
      { imageUrl: 1, fullName: 1, specialization: 1, rating: 1, _id: 1 }
    ).lean();

    return new Response(JSON.stringify(doctors), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
