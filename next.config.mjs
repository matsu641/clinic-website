/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cast-care.html",
        destination: "/cast-care",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
