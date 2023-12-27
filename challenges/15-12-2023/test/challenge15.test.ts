import path from "path";
import { parseSequence } from "../helpers/parseSequence";
import { solvePartOne } from "../solvePartOne";

test("challenge 15 part one", () => {
  const sequence = parseSequence(path.join(__dirname, "input.txt"));
  const result = solvePartOne(sequence);
  expect(result).toBe(1320);
});
