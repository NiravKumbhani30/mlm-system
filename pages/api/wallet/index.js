import ConnectMongo from "../../../database/connection";
import Wallet from "../../../models/wallet";
import User from "../../../models/user";
import PackageHistory from "../../../models/userpackagehistory";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body: {
      userId,
      coinId,
      coinBalance,
      packageAmount,
      ref_from,
      packageId,
      packagePrice,
      coinPrice,
    },
  } = req;

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "You must logged in" });
  }

  switch (method) {
    case "GET":
      try {
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
        const wallData = await Wallet.aggregate([
          { $match: { userId: new mongoose.Types.ObjectId(userId) } },
          {
            $lookup: {
              from: "coins",
              localField: "coinId",
              foreignField: "_id",
              as: "coinInfo",
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
        ]);
        res.status(200).json(wallData);
      } catch (error) {}
      break;

    case "POST":
      try {
        const coinLeft = Number(coinBalance) - Number(packageAmount);
        await Wallet.findOneAndUpdate(
          { userId, coinId },
          { balance: coinLeft }
        );

        await PackageHistory.create({
          userId,
          coinId,
          packageId,
          usdPrice: packagePrice,
          coinPrice,
        });

        if (ref_from) {
          const findUser = await User.findOne({ ref_code: ref_from });
          const sponsorAmt = (packageAmount * 5) / 100;
          await Wallet.findOne(
            { userId: findUser._id, coinId },
            (err, data) => {
              if (!err) {
                data.balance = (
                  Number(data.balance) + Number(sponsorAmt)
                ).toFixed(4);
                data.save();
              } else {
                return res.status(400).json({ error: "Something went wrong" });
              }
            }
          );
        }

        
        res.status(200).json({ message: "Purchase succesful" });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    default:
      break;
  }
};
