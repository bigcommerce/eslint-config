function hasPackage(pkgName) {
  try {
    require.resolve(pkgName, { paths: [process.cwd()] });

    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  hasPackage,
};
