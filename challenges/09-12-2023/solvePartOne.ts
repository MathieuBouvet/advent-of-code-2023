import { sum } from "../../utils/sum";
import { getExtrapolation } from "./helpers/getExtrapolation";
import { getLineSequences } from "./helpers/getLineSequences";

function solvePartOne(report: number[][]): number {
  const extrapolations = report.map(reportLine => {
    const lineExtrapolations = getLineSequences(reportLine);
    return getExtrapolation(lineExtrapolations);
  });

  return sum(extrapolations);
}

export { solvePartOne };
