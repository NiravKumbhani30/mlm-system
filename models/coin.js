import { model, models, Schema } from "mongoose";

const Coinschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tiker: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    usdPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.coin || model("coin", Coinschema);
