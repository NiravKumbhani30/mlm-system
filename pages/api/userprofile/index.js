import ConnectMongo from "../../../database/connection";
import Jwt from "jsonwebtoken";
import User from "../../../models/user";

ConnectMongo();

export default async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "You must logged in" });
  }

  try {
    const { userId } = Jwt.verify(authorization, process.env.JWT_SECRET);
    const userDetails = await User.findById(userId);
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(401).json(error);
  }
};
