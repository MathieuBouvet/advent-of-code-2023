import path from "path";
import { parseContraptions } from "../helpers/parseContraptions";
import { solvePartOne } from "../solvePartOne";

test("challenge 16 part one", () => {
  const contraptions = parseContraptions(path.join(__dirname, "input.txt"));
  const result = solvePartOne(contraptions);
  expect(result).toBe(46);
});
