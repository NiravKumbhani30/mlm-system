import ConnectMongo from "../../../database/connection";
import user from "../../../models/user";


ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await user.find();
        res.status(200).json(data);
      } catch (error) {
        resizeBy.status(404).json(error);
      }
      break;

    case "POST":
      try {
        await user(body).save();
        const data = await user.find();
        res.status(200).json({ message: "user created successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
  }
};
