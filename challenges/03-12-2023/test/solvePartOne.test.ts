import path from "path";
import { parseInput } from "../helpers/parseInput";
import { solvePartOne } from "../solvePartOne";

test("challenge 3 part one", () => {
  const lines = parseInput(path.join(__dirname, "input.example.txt"));
  const res = solvePartOne(lines);

  expect(res).toBe(4361);
});
