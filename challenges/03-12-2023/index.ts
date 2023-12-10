import path from "path";
import { parseInput } from "./helpers/parseInput";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { solvePartTwo } from "./solvePartTwo";

function challenge03(isPartTwo: boolean) {
  const solve = isPartTwo ? solvePartTwo : solvePartOne;

  const lines = parseInput(path.join(__dirname, "input.txt"));

  const result = solve(lines);

  console.log(getSolutionMessage(3, isPartTwo), result);
}

export { challenge03 };
