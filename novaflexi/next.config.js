//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('./.nx-helpers/compiled.js');
const { withSentryConfig } = require('@sentry/nextjs');

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
  // abych zjednodusil migraci na Next. Next vytvari routy podle adresarove struktury pro kazdy soubor v pages, takze v
  // nasem pripade to udela i pro vsechny test soubory. Tomu zamezim tak, ze Nextu reknu, aby delal routy pouze pro
  // soubory, ktere maji pred koncovkou napsano "page". Protoze neni prakticke menit defaultni chovani, musime testovaci
  // soubory a dalsi, pro ktere nechceme vytvaret routy presunout jinam a tuto pageExtensions muzeme smazat.
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

let config = withNx(nextConfig);

if (process.env.NODE_ENV === 'production')
  config = withSentryConfig(
    config,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: 'erste-group',
      project: 'flexi',
    },
    {
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: process.env.CI === 'true',
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,

      // Hides source maps from generated client bundles
      hideSourceMaps: true,

      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,
    }
  );

module.exports = config;
