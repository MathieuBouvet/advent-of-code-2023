import path from "path";
import { parseGalaxyMap } from "./helpers/parseGalaxyMap";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge11() {
  const parsed = parseGalaxyMap(path.join(__dirname, "input.txt"));
  const res = solvePartOne(parsed);
  console.log(getSolutionMessage(11), res);
}

export { challenge11 };
