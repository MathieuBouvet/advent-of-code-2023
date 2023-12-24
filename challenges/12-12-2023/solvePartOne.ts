import { sum } from "../../utils/sum";
import { getMatchingCombinations } from "./helpers/getMatchingCombinations";
import { SpringReport } from "./helpers/parseSpringReports";

function solvePartOne(springReports: SpringReport[]) {
  const possibleCombinaisonLength = springReports.map(
    c => getMatchingCombinations(c).length
  );
  return sum(possibleCombinaisonLength);
}

export { solvePartOne };
