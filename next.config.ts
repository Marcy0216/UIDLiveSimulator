import type { NextConfig } from 'next';

const repo = 'UIDLiveSimulator';
const isPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig: NextConfig = {output:'export',basePath:isPages?`/${repo}`:'',assetPrefix:isPages?`/${repo}/`:'',env:{NEXT_PUBLIC_BASE_PATH:isPages?`/${repo}`:''}};

export default nextConfig;
