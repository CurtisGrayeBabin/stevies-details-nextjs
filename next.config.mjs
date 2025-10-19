/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export mode
    trailingSlash: true,
    images: {
      unoptimized: true, // Since Next.js image optimization requires a server
    },
};

export default nextConfig;
