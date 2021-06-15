module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
