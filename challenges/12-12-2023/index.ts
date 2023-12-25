import path from "path";
import { parseSpringReports } from "./helpers/parseSpringReports";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { solveRecursive } from "./solveRecursive";

function challenge12() {
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  console.time("done");
  const result = solveRecursive(springReports);
  console.timeEnd("done");
  console.log(getSolutionMessage(12), result);
}

export { challenge12 };
