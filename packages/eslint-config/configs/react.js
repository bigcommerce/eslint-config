/** @type {import("eslint").Linter.Config} */
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
    // Remove when https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/757 gets released
    'jsx-a11y/no-onchange': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        propElementValues: 'always',
        props: 'never',
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'warn',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          { alternatives: ['&gt;'], char: '>' },
          { alternatives: ['&#125;'], char: '}' },
        ],
      },
    ],
    'react/no-unsafe': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // eslint-disable-next-line sort-keys
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      },
    },
  ],
};
