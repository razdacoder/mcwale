/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/ddeqdbhlr/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "bucafededczesdbjtygt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
