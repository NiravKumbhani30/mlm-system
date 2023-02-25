import ConnectMongo from "../../../database/connection";
import coin from "../../../models/coin";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body,
    query: { coinId },
  } = req;

  switch (method) {
    case "GET":
      try {
        const result = await coin.findById(coinId);
        res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ error: "Something went wrong" });
      }
      break;

    case "PUT":
      try {
        await coin.findByIdAndUpdate(coinId, body, {
          new: true,
          runValidators: true,
        });
        const data = await coin.find();
        res.status(200).json({ message: "Coin details update successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case "DELETE":
      try {
        await coin.findByIdAndDelete(coinId);
        const data = await coin.find();
        res.status(200).json({ message: "Coin delete successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
  }
};
