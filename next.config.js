const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  providerImportSource: '@mdx-js/react',
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  reactStrictMode: true,
  basePath: '/nextjs-pages',
  assetPrefix: '/nextjs-pages',
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  swcMinify: true,
};

module.exports = withMDX(nextConfig);

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   basePath: '/nextjs-pages',
//   assetPrefix: '/nextjs-pages',
// };

// module.exports = nextConfig;
