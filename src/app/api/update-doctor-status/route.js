import { NextResponse } from "next/server";
import connect from "src/lib/dbConnect";
import Doctors from "src/models/Doctors";

export async function PATCH(req) {
    try {
      await connect(); // Ensure DB is connected
      console.log("DB Connected for PATCH request");
  
      const { id, registered } = await req.json(); // Extract data from request body
      console.log("Updating doctor with ID:", id, "New registered status:", registered);
  
      // Find and update doctor
      const updatedDoctor = await Doctors.findByIdAndUpdate(
        id,
        { registered },
        { new: true } // Returns updated document
      );
  
      if (!updatedDoctor) {
        return NextResponse.json({ message: "Doctor not found" }, { status: 404 });
      }
  
      return NextResponse.json(
        { message: "Doctor updated successfully", doctor: updatedDoctor },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating doctor:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }