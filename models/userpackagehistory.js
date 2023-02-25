import { model, models, Schema } from "mongoose";

const PackageHistoryschema = new Schema(
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
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "packages",
      required: true,
    },
    usdPrice: {
      type: String,
      required: true,
    },
    coinPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.packageHistory ||
  model("packageHistory", PackageHistoryschema);
