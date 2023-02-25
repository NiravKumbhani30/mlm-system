import ConnectMongo from "../../../database/connection";
import Package from "../../../models/package";
ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Package.find();
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }

    case "POST":
      try {
        await Package(body).save();
        const data = await Package.find();
        res.status(200).json({ message: "Package created successdully", data });
      } catch (error) {
        res.status(404).json(error);
      }

  }
};
