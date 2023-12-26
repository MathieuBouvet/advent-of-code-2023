import path from "path";
import { parseRockMap } from "./helpers/parseRockMap";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { isPartOne } from "../../utils/problemContext";
import { solvePartTwo } from "./solvePartTwo";

function challenge14() {
  const rockMap = parseRockMap(path.join(__dirname, "input.txt"));
  const solve = isPartOne() ? solvePartOne : solvePartTwo;
  const result = solve(rockMap);
  console.log(getSolutionMessage(14), result);
}

export { challenge14 };
