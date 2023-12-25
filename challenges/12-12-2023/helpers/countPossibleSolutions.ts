const cache: Record<string, number> = {};

function getKey(
  parts: string,
  groupDetails: number[],
  seenBrokenPartsInCurrentGroup: number
): string {
  return [parts, groupDetails.join(","), seenBrokenPartsInCurrentGroup].join(
    "|"
  );
}

function countPossibleSolutions(
  parts: string,
  groupDetails: number[],
  seenBrokenPartsInCurrentGroup: number
): number {
  const cacheKey = getKey(parts, groupDetails, seenBrokenPartsInCurrentGroup);
  const cached = cache[cacheKey];
  if (cached != null) {
    return cached;
  }

  if (parts.length === 0) {
    const isValidSolution =
      groupDetails.length === 0 && seenBrokenPartsInCurrentGroup === 0;
    return isValidSolution ? 1 : 0;
  }
  const currentChar = parts.charAt(0);
  const currentGroup = groupDetails[0];

  const possibleChars = currentChar === "?" ? ["#", "."] : currentChar;
  let possibleSolutions = 0;
  for (const char of possibleChars) {
    if (char === "#") {
      // broken parts seen: count it and move to next char
      possibleSolutions += countPossibleSolutions(
        parts.slice(1),
        groupDetails,
        seenBrokenPartsInCurrentGroup + 1
      );
    } else {
      if (seenBrokenPartsInCurrentGroup !== 0) {
        if (seenBrokenPartsInCurrentGroup === currentGroup) {
          // current group can be closed
          possibleSolutions += countPossibleSolutions(
            parts.slice(1),
            groupDetails.slice(1),
            0
          );
        }
      } else {
        // move to next char
        possibleSolutions += countPossibleSolutions(
          parts.slice(1),
          groupDetails,
          0
        );
      }
    }
  }
  cache[cacheKey] = possibleSolutions;
  return possibleSolutions;
}

export { countPossibleSolutions };
