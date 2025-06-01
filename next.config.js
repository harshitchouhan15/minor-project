/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "media.architecturaldigest.com"
      }
    ]
  }
}

module.exports = nextConfig
