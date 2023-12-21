import path from "path";
import { parseTiles } from "./helpers/parseTiles";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge10() {
  const tiles = parseTiles(path.join(__dirname, "input.txt"));
  const result = solvePartOne(tiles);
  console.log(getSolutionMessage(10), result);
}

export { challenge10 };
