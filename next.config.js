/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/stories",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
