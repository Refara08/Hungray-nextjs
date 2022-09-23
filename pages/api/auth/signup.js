import dbConnect from "../../../utils/mongo";
import Admin from "../../../model/Admin";
import { hashPassword } from "../../../utils/encrypt-auth";

async function handler(req, res) {
  const { method } = req;

  if (method !== "POST") {
    return;
  }

  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "invalid input or password too weak" });
  }

  await dbConnect();

  const existing = await Admin.findOne({ email: email });

  if (existing) {
    res
      .status(422)
      .json({ message: `This email ${email} is already assign or registered` });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await Admin.create({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "created user!", data: result });
}

export default handler;
