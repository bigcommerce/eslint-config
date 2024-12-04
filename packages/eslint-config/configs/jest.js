/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest', 'jest-formatting'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'jest-formatting/padding-around-all': 'warn',
    'jest/no-conditional-in-test': 'error',
    'jest/no-done-callback': 'off',
    'jest/no-duplicate-hooks': 'off',
    'jest/no-restricted-matchers': [
      'error',
      {
        toBeFalsy: 'Avoid `toBeFalsy`, use `toBe(false)` instead.',
        toBeTruthy: 'Avoid `toBeTruthy`, use `toBe(true)` instead.',
      },
    ],
    'jest/no-test-return-statement': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-todo': 'error',
  },
};
