const defaultConfig = require('./');

module.exports = {
  ...defaultConfig,
  extends: [
    ...defaultConfig.extends.filter((config) => !config.includes('prettier')),
    'plugin:prettier/recommended',
  ],
  rules: {
    'sort-keys': 'error',
  },
};
