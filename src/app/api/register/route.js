import bcrypt from "bcryptjs";
import connect from "src/lib/dbConnect";
import User from "src/models/User";

export const POST = async (request) => {
  const { email, name, password, image } = await request.json();
  await connect();
  console.log("DB is connected");

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return Response.json(
      { message: "Email is already in use" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    name,
    password: hashedPassword,
    image,
    role: "patient",
  });
  try {
    await newUser.save();
    return Response.json(
      {
        message: "User registered successfully",
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
};
