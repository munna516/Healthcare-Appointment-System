import connect from "src/lib/dbConnect";
import User from "src/models/User";

export const POST = async (request) => {
  const { email, name, image } = await request.json();
  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return Response.json({ message: "User is already exist" }, { status: 200 });
  }
  const newUser = new User({
    email,
    name,
    image,
    role: "patient",
  });

  try {
    await newUser.save();
    return Response.json(newUser, { status: 200 });
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
};
