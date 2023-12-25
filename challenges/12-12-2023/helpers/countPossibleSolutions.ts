import { sum } from "../../../utils/sum";

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
    // the problem can be solved in a reasonable time thanks to the cache, by skipping a lot of already computed recursions
    return cached;
  }

  if (parts.length === 0) {
    // we reached the end of parts: ends recursion
    if (groupDetails.length !== 0) {
      // invalid solution since we were not able to close all groups
      return 0;
    }
    return 1;
  }

  const currentPart = parts.charAt(0);
  const brokenPartsInCurrentGroup = groupDetails[0];

  // handle known parts or try both possibilities when reading an unknown part, which creates two "branches" of recursive calls (one for each possibility)
  const partsToHandle = currentPart === "?" ? ["#", "."] : [currentPart];
  const nbOfPossibleSolutions = sum(
    // the sum of possible solutions for each parts to handle
    partsToHandle.map(part => {
      // will recursively count solutions and can stop recursion as soon as we know it cannot be a valid solution
      if (part === "#") {
        // broken parts seen: count it and move to next part
        return countPossibleSolutions(
          parts.slice(1),
          groupDetails,
          seenBrokenPartsInCurrentGroup + 1
        );
      }

      if (seenBrokenPartsInCurrentGroup === 0) {
        // no group has started yet: move to next part (used for exhausting "." between groups)
        return countPossibleSolutions(parts.slice(1), groupDetails, 0);
      }

      if (seenBrokenPartsInCurrentGroup === brokenPartsInCurrentGroup) {
        // the current "." mark the end of a valid group: move to next group and next part
        return countPossibleSolutions(parts.slice(1), groupDetails.slice(1), 0);
      }

      // the current "." marks the end of an invalid group: this is not a valid solution. Stops the recursion early
      return 0;
    })
  );

  cache[cacheKey] = nbOfPossibleSolutions;
  return nbOfPossibleSolutions;
}

export { countPossibleSolutions };
