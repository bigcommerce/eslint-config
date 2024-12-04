/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:testing-library/react'],
  plugins: ['testing-library'],
  rules: {
    'testing-library/no-render-in-lifecycle': 'off',
  },
};
