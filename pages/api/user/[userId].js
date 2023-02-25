import ConnectMongo from "../../../database/connection";
import user from "../../../models/user";
import Wallet from "../../../models/wallet";

ConnectMongo();

export default async (req, res) => {
  const {
    method,
    body,
    query: { userId },
  } = req;

  switch (method) {
    case "GET":
      try {
        const result = await user.findById(userId);
        res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ error: "Something went wrong" });
      }
      break;

    case "POST":
      try {
        await Wallet.findOne(
          { userId: body.userId, coinId: body.coinId },
          (err, data) => {
            if (!err) {
              data.balance = (
                Number(data.balance) + Number(body.quantity)
              ).toFixed(4);
              data.save();
            } else {
              return res.status(400).json({ error: "Something went wrong" });
            }
          }
        );
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case "PUT":
      try {
        await user.findByIdAndUpdate(userId, body, {
          new: true,
          runValidators: true,
        });
        const data = await user.find();
        res
          .status(200)
          .json({ message: "User details update successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;

    case "DELETE":
      try {
        await user.findByIdAndDelete(userId);
        const data = await user.find();
        res.status(200).json({ message: "User delete successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
  }
};
