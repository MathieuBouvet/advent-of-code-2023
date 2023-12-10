import path from "path";
import { parseCards } from "../helpers/parseCards";
import { solvePartOne } from "../solvePartOne";

test("challenge 04 part 1", () => {
  const cards = parseCards(path.join(__dirname, "input.example.txt"));

  const result = solvePartOne(cards);

  expect(result).toBe(13);
});
