import ConnectMongo from "../../../database/connection";
import user from "../../../models/user";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const statusFilter = await user.find({ status: body });
        res
          .status(200)
          .json({ message: "Filter applied Succcessfully", statusFilter });
      } catch (error) {
        res.status(400).json(error);
      }
      break;
  }
};
