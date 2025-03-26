import User from "@/models/User";
import connect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });


  if (existingUser) {
    return Response.json({ message: "Email is already in use" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return Response.json("user is registered", { status: 200 });
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
};