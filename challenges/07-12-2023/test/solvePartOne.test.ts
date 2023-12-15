import path from "path";
import { parseHand } from "../helpers/parseHand";
import { solvePartOne } from "../solvePartOne";

test("challenge 07 part one", () => {
  const cards = parseHand(path.join(__dirname, "input.example.txt"));
  const result = solvePartOne(cards);
  expect(result).toBe(6440);
});
