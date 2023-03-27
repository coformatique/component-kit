module.exports = {
  // to migrate to Vite builder, if or when it matures (see: https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/)
  // 1. add dev dep: @storybook/builder-vite
  // 2. change core builder to it
  // 3. add preview-head.html with a <script>window.global = window;</script>
  // 4. change preview.js to .jsx, as Vite (esbuild) doesn't support JSX format in JS files
  core: { builder: 'webpack5' },
  typescript: { reactDocgen: 'react-docgen' },
  framework: '@storybook/react',
  stories: ['../packages/**/src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss'],
  features: { storyStoreV7: true },
  webpackFinal: async config => {
    config.resolve.alias['@emotion/core'] = require.resolve('@emotion/react');
    config.resolve.alias['emotion-theming'] = require.resolve('@emotion/react');

    return config;
  },
};
