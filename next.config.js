/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/webp"],
    minimumCacheTTL: 2592000,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

require("sharp");
module.exports = nextConfig;
