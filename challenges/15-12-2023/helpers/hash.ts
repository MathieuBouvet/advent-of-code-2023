function hash(str: string): number {
  let current = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    current += charCode;
    current *= 17;
    current = current % 256;
  }
  return current;
}

export { hash };
