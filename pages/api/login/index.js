import ConnectMongo from "../../../database/connection";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST":
      try {
        if (!email || !password) {
          return res.status(422).json({ error: "Plese enter all field" });
        }
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(422).json({ error: "User not found" });
        }

        const passMetch = await bcrypt.compare(password, user.password);

        if (passMetch) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7D",
          });
          return res.status(200).json({ message: "Login successful", token });
        }

        return res
          .status(401)
          .json({ error: "email and password dosen't metch" });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    default:
      break;
  }
};
