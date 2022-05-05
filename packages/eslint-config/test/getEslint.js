/* eslint-env node, jest */
const { ESLint } = require('eslint');
const { join } = require('path');

const eslintSerializer = require('./eslint-serializer');

expect.addSnapshotSerializer(eslintSerializer);

function getEslint() {
  return new ESLint({
    cwd: process.cwd(),
    overrideConfigFile: join(__dirname, '..', 'index.js'),
    resolvePluginsRelativeTo: process.cwd(),
    useEslintrc: false,
  });
}

module.exports = {
  getEslint,
};
