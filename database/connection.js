import mongoose, { connect } from "mongoose";

const ConnectMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject("hello world", error);
  }
};

export default ConnectMongo;
