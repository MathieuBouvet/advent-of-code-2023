import path from "path";
import { parseReport } from "../helpers/parseReport";
import { solvePartOne } from "../solvePartOne";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 09 part 1", () => {
  const report = parseReport(path.join(__dirname, "input.example.txt"));
  const result = solvePartOne(report);
  expect(result).toBe(114);
});

test("challenge 09 part 2", () => {
  const report = parseReport(path.join(__dirname, "input.example.txt"));
  const result = solvePartTwo(report);
  expect(result).toBe(2);
});
