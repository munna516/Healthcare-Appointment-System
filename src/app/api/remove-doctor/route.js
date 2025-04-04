import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

export const DELETE = async (req) => {
    try {
      await connect();
      const { id } = await req.json();
      if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });
      const deletedDoctor = await Doctors.findByIdAndDelete(id);
      if (!deletedDoctor) return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
  
      return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };