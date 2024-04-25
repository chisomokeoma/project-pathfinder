/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
        // missingSuspenseWithCSRBailout: false,
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
    
};

export default nextConfig;
