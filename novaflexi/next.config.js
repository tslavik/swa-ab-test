//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('./.nx-helpers/compiled.js');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'export',
  distDir: '.',
  images: {
    unoptimized: true,
  },
  basePath: '/novaflexi',
};

module.exports = withNx(nextConfig);
