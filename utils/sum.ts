function sum(list: number[]): number {
  return list.reduce((acc, nb) => acc + nb, 0);
}

export { sum };
