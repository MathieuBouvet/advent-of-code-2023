import path from "path";
import { parseRockMap } from "../helpers/parseRockMap";
import { solvePartOne } from "../solvePartOne";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 14 part 1", () => {
  const rockMap = parseRockMap(path.join(__dirname, "input.txt"));
  const result = solvePartOne(rockMap);
  expect(result).toBe(136);
});

test("challenge 14 part 2", () => {
  const rockMap = parseRockMap(path.join(__dirname, "input.txt"));
  const result = solvePartTwo(rockMap);
  expect(result).toBe(64);
});
