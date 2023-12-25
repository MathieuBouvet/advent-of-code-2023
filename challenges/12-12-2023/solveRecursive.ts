import { sum } from "../../utils/sum";
import { countPossibleSolutions } from "./helpers/countPossibleSolutions";
import { expandedGroups, expandedParts } from "./helpers/expandInputs";
import { SpringReport } from "./helpers/parseSpringReports";

function solveRecursive(springReports: SpringReport[]) {
  return sum(
    springReports.map(({ parts, groupDetails }) => {
      const refinedParts = expandedParts(parts) + "."; // adding a "." at the end simplifies edge case handling (when a part ends with #)
      return countPossibleSolutions(
        refinedParts,
        expandedGroups(groupDetails),
        0
      );
    })
  );
}

export { solveRecursive };
