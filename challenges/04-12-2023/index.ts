import path from "path";
import { parseCards } from "./helpers/parseCards";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { solvePartTwo } from "./solvePartTwo";

function challenge04(isPartTwo: boolean) {
  const cards = parseCards(path.join(__dirname, "input.txt"));

  const solve = isPartTwo ? solvePartTwo : solvePartOne;

  const result = solve(cards);

  console.log(getSolutionMessage(4, isPartTwo), result);
}

export { challenge04 };
