export default {
  print(value, serialize) {
    return serialize(value.replace(process.cwd(), '<rootDir>'));
  },
  test(value) {
    return typeof value === 'string' && value.includes(process.cwd());
  },
};
