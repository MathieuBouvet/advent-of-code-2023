import path from "path";
import { parsePatterns } from "./helpers/parsePatterns";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge13() {
  const patterns = parsePatterns(path.join(__dirname, "input.txt"));
  const result = solvePartOne(patterns);
  console.log(getSolutionMessage(13), result);
}

export { challenge13 };
