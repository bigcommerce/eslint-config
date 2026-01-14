import globals from 'globals';

import baseConfig from './configs/base.js';
import jestDomConfig from './configs/jest-dom.js';
import jestConfig from './configs/jest.js';
import jsdocConfig from './configs/jsdoc.js';
import prettierConfig from './configs/prettier.js';
import reactConfig from './configs/react.js';
import testingLibraryConfig from './configs/testing-library.js';
import typescriptConfig from './configs/typescript.js';
import { hasPackage } from './utils/index.js';

export default (async () => {
  const configs = [
    // Base configurations
    ...baseConfig,
    ...jsdocConfig,
    ...prettierConfig,
  ];

  // Conditionally add test-related configs
  if (await hasPackage('jest')) {
    configs.push(...jestConfig);
  }

  if (await hasPackage('@testing-library/jest-dom')) {
    configs.push(...jestDomConfig);
  }

  if (await hasPackage('@testing-library/react')) {
    configs.push(...testingLibraryConfig);
  }

  // Conditionally add React config
  if (await hasPackage('react')) {
    configs.push(...reactConfig);
  }

  // Conditionally add TypeScript config
  if (await hasPackage('typescript')) {
    configs.push(...typescriptConfig);
  }

  // Add Node.js environment for .js files in the root
  configs.push({
    files: ['*.js'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  });

  return configs;
})();
