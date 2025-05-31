import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home", // Ajuste para a página correta do seu site
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
