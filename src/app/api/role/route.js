import connect from "src/lib/dbConnect";
import User from "src/models/User";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }
    await connect();

    const userRole = await User.findOne({ email })
      .select("role -_id")
      .lean()
      .exec();
    if (!userRole) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json({ role: userRole.role }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
