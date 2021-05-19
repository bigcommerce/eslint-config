const defaultConfig = require('./');

module.exports = {
  ...defaultConfig,
  extends: [
    // We do this filter to avoid our custom check for a prettier config on package.json
    // for testing purposes
    ...defaultConfig.extends.filter((config) => !config.includes('prettier')),
    'plugin:prettier/recommended',
  ],
  rules: {
    'sort-keys': 'error',
  },
};
