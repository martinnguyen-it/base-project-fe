/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
