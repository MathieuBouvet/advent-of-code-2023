import path from "path";
import { parseSpringReports } from "../helpers/parseSpringReports";
import { solvePartOne } from "../solvePartOne";
import { solveRecursive } from "../solveRecursive";
import { setPartOne, setPartTwo } from "../../../utils/problemContext";

test("challenge 12 part 1", () => {
  setPartOne();
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  const res = solveRecursive(springReports);
  expect(res).toBe(21);
});

test("challenge 12 part 2", () => {
  setPartTwo();
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  const res = solveRecursive(springReports);
  expect(res).toBe(525152);
});
