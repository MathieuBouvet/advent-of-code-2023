function getSurroundings(
  lines: string[],
  lineIndex: number,
  numberTxtIndex: number,
  numberTxtLength: number
): string[] {
  const start = numberTxtIndex - 1;
  const boundedStart = Math.max(0, start);

  const end = numberTxtIndex + numberTxtLength + 1;
  const boundedEnd = Math.min(lines[lineIndex].length, end);

  const top = (lines[lineIndex - 1] ?? "")
    .slice(boundedStart, boundedEnd)
    .split("");

  const charBefore = lines[lineIndex]?.[start];
  const charAfter = lines[lineIndex]?.[numberTxtIndex + numberTxtLength];

  const bottom = (lines[lineIndex + 1] ?? "")
    .slice(boundedStart, boundedEnd)
    .split("");

  return [...top, charBefore, charAfter, ...bottom].filter(c => c != null);
}

export { getSurroundings };
