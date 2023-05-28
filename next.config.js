/** @type {import('next').NextConfig} */
const path = require('path')

const basePath = ''
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig: {
    ENV: process.env.ENV || 'development',
    FIREBASE_KEY: process.env.FIREBASE_KEY || '',
    FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID || '',
  },
  env: {
    ENV: process.env.ENV || 'development',
    FIREBASE_KEY: process.env.FIREBASE_KEY || '',
    FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID || '',
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
}

module.exports = nextConfig
