module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /.*\.(?:le|c|sc)ss$/,
      loaders: [
        'sass-loader',
      ]
    });
    return config;
  },
}
