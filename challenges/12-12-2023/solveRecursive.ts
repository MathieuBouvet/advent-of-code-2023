import { sum } from "../../utils/sum";
import { countPossibleSolutions } from "./helpers/countPossibleSolutions";
import { SpringReport } from "./helpers/parseSpringReports";

function solveRecursive(springReports: SpringReport[]) {
  const possibleCombinaisonLength = springReports.map(c =>
    countPossibleSolutions(c.parts + ".", c.groupDetails, 0)
  );
  return sum(possibleCombinaisonLength);
}

export { solveRecursive };
