import path from "path";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { Tiles } from "./models/Tiles";
import { isPartOne } from "../../utils/problemContext";
import { solvePartTwo } from "./solvePartTwo";

function challenge10() {
  const tiles = new Tiles(path.join(__dirname, "input.txt"));
  const solve = isPartOne() ? solvePartOne : solvePartTwo;
  const result = solve(tiles);
  console.log(getSolutionMessage(10), result);
}

export { challenge10 };
