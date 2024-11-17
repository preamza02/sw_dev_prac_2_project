/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
        domains: ['cf.bstatic.com'], // Add the external domain here
    },
};

export default nextConfig;
