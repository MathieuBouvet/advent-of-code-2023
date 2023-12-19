function getExtrapolation(sequences: number[][]): number {
  const sequencesExtrapolations: number[] = [0];
  for (let i = sequences.length - 2; i >= 0; i--) {
    const current = sequences[i].at(-1) ?? 0;
    const previous = sequencesExtrapolations.at(-1) ?? 0;
    sequencesExtrapolations.push(current + previous);
  }
  return sequencesExtrapolations.at(-1) ?? 0;
}

export { getExtrapolation };
