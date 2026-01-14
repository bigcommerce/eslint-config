export async function hasPackage(pkgName) {
  try {
    // Check if a package is resolvable from the current module context.
    // Uses dynamic import since import.meta.resolve() resolves from this file's
    // location rather than the consuming project's node_modules.
    await import(pkgName);

    return true;
  } catch {
    return false;
  }
}
