import { model, models, Schema } from "mongoose";

const coinDataSchema = new Schema({
  coinId: {
    type: Schema.Types.ObjectId,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Walletschema2 = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    coinData: coinDataSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.arrWallet || model("arrWallet", Walletschema2);
