import ConnectMongo from "../../../database/connection";
import Package from "../../../models/package";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body,
    query: { packageId },
  } = req;

  switch (method) {
    case "GET":
      try {
        const result = await Package.findById(packageId);
        res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ error: "Something went wrong" });
      }
      break;

    case "PUT":
      try {
        await Package.findByIdAndUpdate(packageId, body, {
          new: true,
          runValidators: true,
        });
        const data = await Package.find();
        res.status(200).json({ message: "package details update successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case "DELETE":
      try {
        await Package.findByIdAndDelete(packageId);
        const data = await Package.find();
        res.status(200).json({ message: "package delete successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
  }
};
