import ConnectMongo from "../../../database/connection";
import coin from "../../../models/coin";
ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await coin.find();
        res.status(200).json(data);
      } catch (error) {
        res.status(404).json(error);
      }

    case "POST":
      try {
        await coin(body).save();
        const data = await coin.find();
        res.status(200).json({ message: "Coin created successdully", data });
      } catch (error) {
        res.status(404).json(error);
      }
  }
};
