import path from "path";
import { parseMaps } from "./helpers/parseMaps";
import { solvePartOne } from "./solvePartOne";
import { parseSeeds } from "./helpers/parseSeeds";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { parseSeedRanges } from "./helpers/parseSeedRanges";
import { solvePartTwo } from "./solvePartTwo";

function challenge05(ispartTwo: boolean) {
  const filePath = path.join(__dirname, "input.txt");
  const maps = parseMaps(filePath);
  const seeds = parseSeeds(filePath);
  const seedRAnges = parseSeedRanges(filePath);

  const result = ispartTwo
    ? solvePartTwo(maps, seedRAnges)
    : solvePartOne(maps, seeds);

  console.log(getSolutionMessage(5, ispartTwo), result);
}

export { challenge05 };
