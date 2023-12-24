import path from "path";
import { parseSpringReports } from "../helpers/parseSpringReports";
import { solvePartOne } from "../solvePartOne";

test("challenge 12 part 1", () => {
  const springReports = parseSpringReports(path.join(__dirname, "input.txt"));
  const res = solvePartOne(springReports);
  expect(res).toBe(21);
});
