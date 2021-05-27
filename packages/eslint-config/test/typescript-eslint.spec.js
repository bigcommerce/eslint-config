const { ESLint } = require('eslint');
const { join } = require('path');

const eslintSerializer = require('./eslint-serializer');

expect.addSnapshotSerializer(eslintSerializer);

function getEslint() {
  return new ESLint({
    cwd: process.cwd(),
    overrideConfig: {
      extends: ['plugin:@typescript-eslint/all'],
      parserOptions: {
        project: join(process.cwd(), 'tsconfig.json'),
      },
    },
    resolvePluginsRelativeTo: process.cwd(),
    useEslintrc: false,
  });
}

describe('plugin:@typescript-eslint/all', () => {
  it('if this test fails, the plugin probably added new rules. Please check which rules were added/changed and add them to our config when appropriate', async () => {
    const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.ts'));

    expect(output).toMatchSnapshot();
  });
});
