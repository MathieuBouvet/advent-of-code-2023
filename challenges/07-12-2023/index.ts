import path from "path";
import { parseHand } from "./helpers/parseHand";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { solvePartTwo } from "./solvePartTwo";
import { parseHandPartTwo } from "./helpers/partTwo/parseHandPartTwo";

function challenge07(isPartTwo: boolean) {
  const parse = isPartTwo ? parseHandPartTwo : parseHand;

  const hands = parse(path.join(__dirname, "input.txt"));

  const solve = isPartTwo ? solvePartTwo : solvePartOne;
  const result = solve(hands);

  console.log(getSolutionMessage(7, isPartTwo), result);
}

export { challenge07 };
