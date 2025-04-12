/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverComponentsHmrCache:false, // default to true 
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gzwzjajpsqjlowusqyym.supabase.co",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/embed",
                headers: [
                    {
                        key: "content-Security-Policy",
                        value: "frame-src 'self' https://car-waitlist.created.app ",
                    },
                    
                ],
            },
        ];
    },  
};

export default nextConfig;
