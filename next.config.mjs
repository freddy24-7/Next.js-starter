const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_BUCKET_NAME,
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
