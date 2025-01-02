const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'venedorcitrus.myshopify.com',
        pathname: '/cdn/shop/products/**', // Matches your product images
      },
    ],
    domains: ['venedorcitrus.myshopify.com'], // Alternative configuration for simpler setups
  },
};

module.exports = nextConfig;