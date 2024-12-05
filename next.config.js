/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'Local site URL',
    MONGO_URL: "DataBase URL",
    COIN_CLOUD_URL: "Cloudinary URL",
    JWT_SECRET: "this is secret key"
  },
};

module.exports = nextConfig;
