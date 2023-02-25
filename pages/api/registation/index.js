import ConnectMongo from "../../../database/connection";
import user from "../../../models/user";
import coin from "../../../models/coin";
import bcrypt from "bcrypt";
import wallet from "../../../models/wallet";
import arrwallet from "../../../models/arrwallet";

ConnectMongo();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const hashPassword = await bcrypt.hash(body.password, 10);
        await user({ ...body, password: hashPassword }).save();

        const coinId = await coin.aggregate([{ $project: { _id: 1 } }]);
        const userId = await user.aggregate([
          { $match: { email: body.email } },
          { $project: { _id: 1 } },
        ]);

        const walletData = coinId.map((val) => ({
          userId: userId[0]._id,
          coinId: val._id,
          balance: 0,
        }));

        await wallet.create(...walletData);

        //*  wallet 2

        // const walletData_2 = coinId.map((val) => ({
        //   coinId: val._id,
        //   balance: 0,
        // }));
        // await arrwallet.create({ userId, coinData: walletData_2 });

        res.status(200).json({ message: "user created successfully", data });
      } catch (error) {
        res.status(404).json(error);
      }
      break;
  }
};
