import connect from "src/lib/dbConnect";

export const GET = async () => {
  try {
    await connect();
    console.log("DB is connected");

    const doctors = await becameDoctors.find();
    
    return NextResponse.json(
      {
        message: "Doctors fetched successfully",
        doctors,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return NextResponse.json(
      { message: "Error fetching doctors", error: error.message },
      { status: 500 }
    );
  }
};