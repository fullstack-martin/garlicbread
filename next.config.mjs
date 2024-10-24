/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_KEY:process.env["SERVER_KEY"]
    }
};

export default nextConfig;
