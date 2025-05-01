/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
<<<<<<< HEAD
    return config;
  },
=======
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/models/',
          outputPath: 'static/models/',
        },
      },
    });
    return config;
  },
  images: {
    domains: ['localhost'],
  },
>>>>>>> 3755027 (Initial commit)
}

module.exports = nextConfig 