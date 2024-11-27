/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "picsum.photos",
            port: "",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "i.postimg.cc",
            port: "",
          },
        ],
      },
};

export default nextConfig;
