/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "dev-to-uploads.s3.amazonaws.com"],
  },
  target: "serverless",
  locales: ["en-US"],
  defaultLocale: "en-US",
};

module.exports = nextConfig;
