import path from "path";
import { parseContraptions } from "./helpers/parseContraptions";
import { solvePartOne } from "./solvePartOne";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge16() {
  const contraptions = parseContraptions(path.join(__dirname, "input.txt"));
  const result = solvePartOne(contraptions);
  console.log(getSolutionMessage(16), result);
}

export { challenge16 };
