/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mgdkamqbxvrywiscpsvh.supabase.co',
        },
        {
          protocol: 'https',
          hostname: 'myluxuryhomespa.com',
        },
        {
          protocol: 'https',
          hostname: 'saunalife.com',
        },
        {
          protocol: 'https',
          hostname: 'thesaunaplace.com',
        },
        {
          protocol: 'https',
          hostname: 'nordicasauna.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  }
  
  
  module.exports = nextConfig