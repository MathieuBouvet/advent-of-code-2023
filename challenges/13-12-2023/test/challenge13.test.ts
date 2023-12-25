import path from "path";
import { parsePatterns } from "../helpers/parsePatterns";
import { solvePartOne } from "../solvePartOne";

test("challenge 13 part 1", () => {
  const patterns = parsePatterns(path.join(__dirname, "input.txt"));
  const result = solvePartOne(patterns);
  expect(result).toBe(405);
});
