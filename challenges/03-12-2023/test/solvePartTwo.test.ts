import path from "path";
import { parseInput } from "../helpers/parseInput";
import { solvePartTwo } from "../solvePartTwo";

test("challege 3 part 2", () => {
  const lines = parseInput(path.join(__dirname, "input.example.txt"));

  const res = solvePartTwo(lines);

  expect(res).toBe(467835);
});
