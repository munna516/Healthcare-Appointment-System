import bcrypt from "bcryptjs";
import connect from "src/lib/dbConnect";
import User from "src/models/User";

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();

    await connect();

    const isFound = await User.findOne({ email });
    if (!isFound) {
      return Response.json({ message: "User not found" }, { status: 400 });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, isFound.password);
    if (!isMatch) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const { password: _, ...userWithoutPassword } = isFound.toObject();
    // console.log(userWithoutPassword);
    return Response.json(userWithoutPassword, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};
