function isSpecialChar(char: string): boolean {
  if (char === ".") {
    return false;
  }
  if (/[0-9]/.test(char)) {
    return false;
  }
  return true;
}

export { isSpecialChar };
