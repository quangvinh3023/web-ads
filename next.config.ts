import type { NextConfig } from 'next';

// GitHub project Pages serves this site under /web-ads; local/Sites builds use /.
const basePath = process.env.GITHUB_PAGES === 'true' ? '/web-ads' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
