module.exports = {
  plugins: ['jest', 'jest-formatting'],
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/no-done-callback': 'off',
    'jest/no-duplicate-hooks': 'off',
    'jest/no-if': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-todo': 'error',
    'jest/no-restricted-matchers': [
      'error',
      {
        toBeTruthy: 'Avoid `toBeTruthy`, use `toBe(true)` instead.',
        toBeFalsy: 'Avoid `toBeFalsy`, use `toBe(false)` instead.',
      },
    ],
    'jest-formatting/padding-around-all': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
  },
};
