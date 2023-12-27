import path from "path";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { parseSequence } from "./helpers/parseSequence";
import { solvePartOne } from "./solvePartOne";
import { isPartOne } from "../../utils/problemContext";
import { parseInstructions } from "./helpers/parseInstructions";
import { solvePartTwo } from "./solvePartTwo";

function challenge15() {
  if (isPartOne()) {
    const sequence = parseSequence(path.join(__dirname, "input.txt"));
    const result = solvePartOne(sequence);
    console.log(getSolutionMessage(15), result);
  } else {
    const instructions = parseInstructions(path.join(__dirname, "input.txt"));
    const result = solvePartTwo(instructions);
    console.log(getSolutionMessage(15), result);
  }
}

export { challenge15 };
