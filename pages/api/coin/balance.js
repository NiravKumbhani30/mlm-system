import ConnectMongo from "../../../database/connection";
import coin from "../../../models/coin";
import Wallet from "../../../models/wallet";
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "You must logged in" });
  }

  switch (method) {
    case "GET":
      try {
        const { userId } = Jwt.verify(authorization, process.env.JWT_SECRET);
        const data = await Wallet.aggregate([
          { $match: { userId: new mongoose.Types.ObjectId(userId) } },
          {
            $lookup: {
              from: "coins",
              localField: "coinId",
              foreignField: "_id",
              as: "coinInfo",
            },
          },
        ]);
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
  }
};
