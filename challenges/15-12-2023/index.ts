import path from "path";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { parseSequence } from "./helpers/parseSequence";
import { solvePartOne } from "./solvePartOne";

function challenge15() {
  const sequence = parseSequence(path.join(__dirname, "input.txt"));
  const result = solvePartOne(sequence);
  console.log(getSolutionMessage(15), result);
}

export { challenge15 };
