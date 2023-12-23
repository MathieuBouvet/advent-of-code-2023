function getAllPossiblePairs<T>(list: T[]): [T, T][] {
  if (list.length < 2) {
    throw new TypeError("list must have at least 2 elements");
  }
  let result: [T, T][] = [];
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      result.push([list[i], list[j]]);
    }
  }
  return result;
}
export { getAllPossiblePairs };
