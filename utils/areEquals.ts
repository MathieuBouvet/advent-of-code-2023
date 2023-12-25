function areEquals<T, U>(
  list1: T[],
  list2: U[],
  equalityCheck: (a: T, b: U) => boolean = (a, b) => (a as any) === b
): boolean {
  if (list1.length !== list2.length) {
    return false;
  }
  for (let i = 0; i < list1.length; i++) {
    if (!equalityCheck(list1[i], list2[i])) {
      return false;
    }
  }
  return true;
}

export { areEquals };
