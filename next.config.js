/** @type {import('next').NextConfig} */
const path = require('path')

const basePath = ''
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig: {},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer, webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_IS_SERVER': JSON.stringify(isServer.toString()),
      })
    )
    config.resolve.modules.push(__dirname)
    return config
  },
  basePath,
  poweredByHeader: false,
}

module.exports = nextConfig
