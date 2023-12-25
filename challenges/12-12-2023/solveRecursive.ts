import { isPartOne } from "../../utils/problemContext";
import { sum } from "../../utils/sum";
import { countPossibleSolutions } from "./helpers/countPossibleSolutions";
import { SpringReport } from "./helpers/parseSpringReports";

function solveRecursive(springReports: SpringReport[]) {
  const possibleCombinaisonLength = springReports.map(c => {
    const parts = isPartOne()
      ? c.parts
      : [c.parts, c.parts, c.parts, c.parts, c.parts].join("?");
    const groups = isPartOne()
      ? c.groupDetails
      : [
          ...c.groupDetails,
          ...c.groupDetails,
          ...c.groupDetails,
          ...c.groupDetails,
          ...c.groupDetails,
        ];
    return countPossibleSolutions(parts + ".", groups, 0);
  });
  return sum(possibleCombinaisonLength);
}

export { solveRecursive };
