import path from "path";
import { parseHandPartTwo } from "../helpers/partTwo/parseHandPartTwo";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 07 part one", () => {
  const cards = parseHandPartTwo(path.join(__dirname, "input.example.txt"));
  const result = solvePartTwo(cards);
  expect(result).toBe(5905);
});
