/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  target: "serverless",
};

module.exports = nextConfig;
