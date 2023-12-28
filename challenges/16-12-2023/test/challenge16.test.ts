import path from "path";
import { parseContraptions } from "../helpers/parseContraptions";
import { solvePartOne } from "../solvePartOne";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 16 part one", () => {
  const contraptions = parseContraptions(path.join(__dirname, "input.txt"));
  const result = solvePartOne(contraptions);
  expect(result).toBe(46);
});

test("challenge 16 part 2", () => {
  const contraptions = parseContraptions(path.join(__dirname, "input.txt"));
  const result = solvePartTwo(contraptions);
  expect(result).toBe(51);
});
