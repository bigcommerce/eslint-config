/* eslint-env node, jest */
const { ESLint } = require('eslint');
const { join } = require('path');

const eslintSerializer = require('./eslint-serializer');

expect.addSnapshotSerializer(eslintSerializer);

function getEslint(config = {}) {
  return new ESLint({
    cwd: process.cwd(),
    overrideConfig: {
      ...config,
    },
    overrideConfigFile: join(__dirname, '..', 'index.js'),
    resolvePluginsRelativeTo: process.cwd(),
    useEslintrc: false,
  });
}

const getTSEslint = () =>
  getEslint({
    parserOptions: {
      project: join(__dirname, '__fixtures__', 'tsconfig.json'),
    },
  });

module.exports = {
  getEslint: () => getEslint(),
  getTSEslint,
};
