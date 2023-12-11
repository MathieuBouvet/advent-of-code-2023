import path from "path";
import { parseMaps } from "../helpers/parseMaps";
import { solvePartOne } from "../solvePartOne";
import { parseSeeds } from "../helpers/parseSeeds";

test("challenge 5 part one", () => {
  const filePath = path.join(__dirname, "input.example.txt");
  const maps = parseMaps(filePath);
  const seeds = parseSeeds(filePath);

  const result = solvePartOne(maps, seeds);

  expect(result).toBe(35);
});
