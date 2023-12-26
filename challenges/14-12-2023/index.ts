import path from "path";
import { parseRockMap } from "./helpers/parseRockMap";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge14() {
  const rockMap = parseRockMap(path.join(__dirname, "input.txt"));
  const result = solvePartOne(rockMap);
  console.log(getSolutionMessage(14), result);
}

export { challenge14 };
