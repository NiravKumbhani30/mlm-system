import ConnectMongo from "../../../database/connection";
import user from "../../../models/user";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body: { startDate, endDate },
  } = req;

  switch (method) {
    case "POST":
      try {
        const datefilter = await user.find({
          createdAt: { $gte: startDate, $lte: endDate },
        });
        res
          .status(200)
          .json({ message: "Filter applied Succcessfully", datefilter });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
