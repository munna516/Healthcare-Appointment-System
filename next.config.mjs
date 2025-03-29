/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Replace with your desired hostname
      },
    ],
  },
};

export default nextConfig;
