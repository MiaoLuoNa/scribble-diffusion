/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                ]
            },
          {
                // matching all API routes
                source: "/api/predictions/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                ]
            }
        ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "*.replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upcdn.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/replicate/scribble-diffusion",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/scribble-diffusion",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
