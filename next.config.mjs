/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This creates the 'out' folder for GitHub
  images: {
    unoptimized: true,   // Required for static hosting
  },
};

export default nextConfig;
