/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myprofile', // This tells Next.js the site is in a subfolder
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
