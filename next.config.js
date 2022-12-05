/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["catstagram.lofty.codes"] },
  env: {
    AUTH0_DOMAIN: 'dev-ffo5osk3d0xqjg3c.us.auth0.com',
    AUTH0_CLIENT_ID: '7mIonYzmybC113GJfSFQ5fWrxr5EwnUt',
    AUTH0_REDIRECT_URI: 'https://localhost:3000'
  }
};

module.exports = nextConfig
