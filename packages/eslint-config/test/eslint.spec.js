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

it('keeps rules stable JS', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.js'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable JSX', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.jsx'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable TS', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.ts'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable TSX', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.tsx'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable *.d.ts', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.d.ts'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable *.spec.*', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'spec.js'));

  expect(output).toMatchSnapshot();
});
