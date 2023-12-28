import path from "path";
import { parseContraptions } from "./helpers/parseContraptions";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { isPartOne } from "../../utils/problemContext";
import { solvePartTwo } from "./solvePartTwo";

function challenge16() {
  const contraptions = parseContraptions(path.join(__dirname, "input.txt"));
  const solve = isPartOne() ? solvePartOne : solvePartTwo;
  const result = solve(contraptions);

  console.log(getSolutionMessage(16), result);
}

export { challenge16 };
