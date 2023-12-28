import path from "path";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { parseHeatLossMap } from "./helpers/parseHeatLossMap";
import { solvePartOne } from "./solvePartOne";

function challenge17() {
  const heatLosses = parseHeatLossMap(path.join(__dirname, "input.txt"));
  const result = solvePartOne(heatLosses);
  console.log(getSolutionMessage(17), result?.totalHeatLoss);
}

export { challenge17 };
