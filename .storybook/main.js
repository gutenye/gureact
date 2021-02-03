module.exports = {
  stories: [
    '../*.stories.mdx',
    '../!(node_modules)/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
}
