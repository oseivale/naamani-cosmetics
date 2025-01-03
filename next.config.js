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
      {
        protocol: 'http',
        hostname: 'archivo.halodemo.com',
        pathname: '/**', // Matches your product images
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Matches your product images
      },
    ],
  },
};

module.exports = nextConfig;