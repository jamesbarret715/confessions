import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    redirects: async () => [
        {
            source: "/",
            destination: "/submit",
            permanent: true
        },
        {
            source: "/admin",
            destination: "/admin/home",
            permanent: true
        }
    ]
};

export default nextConfig;
