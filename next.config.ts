import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    rewrites: async () => [
        {
            source: "/",
            destination: "/submit"
        },
        {
            source: "/admin",
            destination: "/admin/home"
        }
    ]
};

export default nextConfig;
