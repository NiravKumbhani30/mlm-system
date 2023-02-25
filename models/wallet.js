import { model, models, Schema } from "mongoose";

const Walletschema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    coinId: {
      type: Schema.Types.ObjectId,
      ref: "coins",
      required: true,
    },
    balance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.wallet || model("wallet", Walletschema);
