const { CLIEngine } = require('eslint');
const { join } = require('path');

expect.addSnapshotSerializer({
  print(value, serialize) {
    return serialize(value.replace(process.cwd(), '<rootDir>'));
  },
  test(value) {
    return typeof value === 'string' && value.includes(process.cwd());
  },
});

function getCLIEngine() {
  return new CLIEngine({
    configFile: join(__dirname, '..', 'index.js'),
    cwd: process.cwd(),
    resolvePluginsRelativeTo: process.cwd(),
    useEslintrc: false,
  });
}

it('keeps rules stable JS', () => {
  const output = getCLIEngine().getConfigForFile(join(__dirname, 'file.js'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable JSX', () => {
  const output = getCLIEngine().getConfigForFile(join(__dirname, 'file.jsx'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable TS', () => {
  const output = getCLIEngine().getConfigForFile(join(__dirname, 'file.ts'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable TSX', () => {
  const output = getCLIEngine().getConfigForFile(join(__dirname, 'file.tsx'));

  expect(output).toMatchSnapshot();
});

it('keeps rules stable *.spec.*', () => {
  const output = getCLIEngine().getConfigForFile(join(__dirname, 'spec.js'));

  expect(output).toMatchSnapshot();
});
