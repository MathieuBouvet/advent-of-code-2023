import path from "path";
import { parseSpringReports } from "../helpers/parseSpringReports";
import { solvePartOne } from "../solvePartOne";
import { solveRecursive } from "../solveRecursive";

test("challenge 12 part 1", () => {
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  const res = solveRecursive(springReports);
  expect(res).toBe(21);
});
