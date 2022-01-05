/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/webp"],
    minimumCacheTTL: 2592000,
  },
  locales: ["en-US"],
  defaultLocale: "en-US",
};

require("sharp");
module.exports = nextConfig;
