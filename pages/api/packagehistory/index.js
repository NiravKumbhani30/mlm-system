import ConnectMongo from "../../../database/connection";
import packageHistory from "../../../models/userpackagehistory";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await packageHistory.aggregate([
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
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
              from: "packages",
              localField: "packageId",
              foreignField: "_id",
              as: "packageInfo",
            },
          },
        ]);
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }

    case "POST":
      try {
        const data = await packageHistory(body).save();
        res.status(200).json({ message: "History creates", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    default:
      break;
  }
};
