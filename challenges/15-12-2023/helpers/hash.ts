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

function memoizedHash() {
  const cache: Record<string, number> = {};

  return (str: string): number => {
    const cached = cache[str];
    if (cached != null) {
      return cached;
    }
    const result = hash(str);
    cache[str] = result;
    return result;
  };
}

export { hash, memoizedHash };
