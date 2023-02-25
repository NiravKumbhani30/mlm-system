import ConnectMongo from "../../../database/connection";
import Package from "../../../models/package";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const activePackage = await Package.find({ status: "Active" });
        res.status(200).json(activePackage);
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case "POST":
      try {
        const statusFilter = await Package.find({ status: body });
        res
          .status(200)
          .json({ message: "Filter applied Succcessfully", statusFilter });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
