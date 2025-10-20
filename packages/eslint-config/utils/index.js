export async function hasPackage(pkgName) {
  try {
    // In ES modules, we try to resolve the package from the current working directory
    // Note: import.meta.resolve is experimental, so we'll use dynamic import instead
    await import(pkgName);

    return true;
  } catch {
    return false;
  }
}
