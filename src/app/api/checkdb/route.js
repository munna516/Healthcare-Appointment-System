import dbConnect from "../../../lib/dbConnect";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Add this export

export async function GET() {
  try {
    const con = await dbConnect();
    console.log("Database connection successful", new Date().toISOString());
    return NextResponse.json(
      { status: "connected", timestamp: new Date().toISOString() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
