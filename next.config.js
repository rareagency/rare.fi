/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  locales: ["en-US"],
  defaultLocale: "en-US",
};

module.exports = nextConfig;
