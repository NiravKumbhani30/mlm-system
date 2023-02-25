/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL: "mongodb+srv://nirav:nirav3093@cluster0.kgxww4m.mongodb.net/mlmsystem?retryWrites=true&w=majority",
    COIN_CLOUD_URL: "https://api.cloudinary.com/v1_1/nick30",
    JWT_SECRET:"this is secret key"
  },
};

module.exports = nextConfig;
