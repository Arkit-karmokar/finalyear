/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
