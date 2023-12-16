import path from "path";
import { parseSeedRanges } from "../helpers/parseSeedRanges";
import { solvePartTwo } from "../solvePartTwo";
import { parseMapsEfficient } from "../helpers/efficient/parseMapsEfficient";

test("challenge 5 part two", () => {
  const filePath = path.join(__dirname, "input.example.txt");
  const maps = parseMapsEfficient(filePath);
  const seedRanges = parseSeedRanges(filePath);

  const result = solvePartTwo(maps, seedRanges);

  expect(result).toBe(46);
});
