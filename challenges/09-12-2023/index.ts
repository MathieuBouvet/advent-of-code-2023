import path from "path";
import { solvePartOne } from "./solvePartOne";
import { parseReport } from "./helpers/parseReport";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { isPartOne } from "../../utils/problemContext";
import { solvePartTwo } from "./solvePartTwo";

function challenge09() {
  const reports = parseReport(path.join(__dirname, "input.txt"));
  const solve = isPartOne() ? solvePartOne : solvePartTwo;
  const res = solve(reports);
  console.log(getSolutionMessage(9), res);
}

export { challenge09 };
