import path from "path";
import { parsePatterns } from "./helpers/parsePatterns";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { isPartOne } from "../../utils/problemContext";
import { solvePartTwo } from "./solvePartTwo";

function challenge13() {
  const patterns = parsePatterns(path.join(__dirname, "input.txt"));
  const solve = isPartOne() ? solvePartOne : solvePartTwo;
  const result = solve(patterns);
  console.log(getSolutionMessage(13), result);
}

export { challenge13 };
