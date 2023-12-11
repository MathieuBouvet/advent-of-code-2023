import path from "path";
import { parseMaps } from "../helpers/parseMaps";
import { parseSeedRanges } from "../helpers/parseSeedRanges";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 5 part two", () => {
  const filePath = path.join(__dirname, "input.example.txt");
  const maps = parseMaps(filePath);
  const seedRanges = parseSeedRanges(filePath);

  const result = solvePartTwo(maps, seedRanges);

  expect(result).toBe(46);
});
