import path from "path";
import { parseSpringReports } from "./helpers/parseSpringReports";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge12() {
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  const result = solvePartOne(springReports);
  console.log(getSolutionMessage(12), result);
}

export { challenge12 };
