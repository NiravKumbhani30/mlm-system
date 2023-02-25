import ConnectMongo from "../../../database/connection";
import coin from "../../../models/coin";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await coin.find({status : "Active"});
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }
    case "POST":
      try {
        const statusFilter = await coin.find({ status: body });
        res
          .status(200)
          .json({ message: "Filter applied Succcessfully", statusFilter });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
