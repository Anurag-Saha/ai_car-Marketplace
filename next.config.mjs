/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers() {
        return [
          {
            source: "/embed",
            headers: [
              {
                key: "content-security-policy",
                value: "frame-src 'self' https://carWait-list.created.app;",
              },
            ],
          },
        ];
        
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript:{
      ignoreBuildErrors: true
    },

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
      
};

export default nextConfig;
