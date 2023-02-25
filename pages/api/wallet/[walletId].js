import ConnectMongo from "../../../database/connection";
import Wallet from "../../../models/wallet";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body,
    query: { walletId },
  } = req;

  switch (method) {
    case "POST":
      try {
        const result = await Wallet.find({ userId: body, coinId: walletId });
        res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ error: "Something went wrong" });
      }
      break;
  }
};
