import path from "path";
import { isPartOne, isPartTwo } from "../../utils/problemContext";
import { parseNavigationMap } from "./helpers/parseNavigationMap";
import { getSolution } from "./getSolution";
import { getSolutionMessage } from "../../utils/getSolutionMessage";

function challenge08() {
  const navigationMap = parseNavigationMap(path.join(__dirname, "input.txt"));

  const result = getSolution(navigationMap);

  console.log(getSolutionMessage(8), result);
}

export { challenge08 };
