/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                port: '',
                pathname: '/images/stock/photo-1534528741775-53994a69daeb.jpg',
            },
        ],
    },
};

export default nextConfig;
