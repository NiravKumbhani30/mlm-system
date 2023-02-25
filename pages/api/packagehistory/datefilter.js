import ConnectMongo from "../../../database/connection";
import packagehistory from "../../../models/userpackagehistory";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body: { startDate, endDate },
  } = req;

  switch (method) {
    case "POST":
      try {
        //   const ddatefilter = await packagehistory.find({
        //     createdAt: { $gte: startDate, $lte: endDate },
        // });

        const datefilter = await packagehistory.aggregate([
          { $match: { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
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

        res
          .status(200)
          .json({ message: "Filter applied Succcessfully", datefilter });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
