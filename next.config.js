/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/**',
        },
    ],
    images: {
        domains: ["avatars.githubusercontent.com", "localhost"]
    }
}

module.exports = nextConfig
