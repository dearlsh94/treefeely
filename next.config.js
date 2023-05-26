/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path')

const basePath = ''
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig: {
    ENV: process.env.ENV || 'development',
  },
  env: {
    ENV: process.env.ENV || 'development',
  },
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
  i18n,
}

module.exports = nextConfig
