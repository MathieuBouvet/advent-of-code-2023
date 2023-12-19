function getLineSequences(reportLine: number[]): number[][] {
  let previousSequence = reportLine;
  const sequences: number[][] = [[...reportLine]];
  while (!previousSequence.every(v => v === 0)) {
    const newSequence = previousSequence.reduce(
      (acc: number[], nb, i, list) => {
        if (i !== 0) {
          acc.push(nb - list[i - 1]);
        }
        return acc;
      },
      []
    );
    sequences.push(newSequence);
    previousSequence = newSequence;
  }
  return sequences;
}

export { getLineSequences };
