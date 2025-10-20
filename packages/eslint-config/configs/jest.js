import jestPlugin from 'eslint-plugin-jest';
import jestFormattingPlugin from 'eslint-plugin-jest-formatting';
import globals from 'globals';

export default [
  {
    files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
      'jest-formatting': jestFormattingPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...jestPlugin.configs.style.rules,
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
  },
];
