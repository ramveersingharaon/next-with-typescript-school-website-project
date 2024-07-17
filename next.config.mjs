/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dcxrzhoaj/**', // replace 'your-cloud-name' with your Cloudinary cloud name
        },
      ],
    },
  };
  


