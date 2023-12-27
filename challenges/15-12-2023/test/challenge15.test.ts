import path from "path";
import { parseSequence } from "../helpers/parseSequence";
import { solvePartOne } from "../solvePartOne";
import { parseInstructions } from "../helpers/parseInstructions";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 15 part one", () => {
  const sequence = parseSequence(path.join(__dirname, "input.txt"));
  const result = solvePartOne(sequence);
  expect(result).toBe(1320);
});

test("challenge 15 part 2", () => {
  const instructions = parseInstructions(path.join(__dirname, "input.txt"));
  const result = solvePartTwo(instructions);
  expect(result).toBe(145);
});
