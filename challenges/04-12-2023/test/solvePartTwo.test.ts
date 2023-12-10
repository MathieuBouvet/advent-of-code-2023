import path from "path";
import { parseCards } from "../helpers/parseCards";
import { solvePartTwo } from "../solvePartTwo";

test("challenge 4 part 2", () => {
  const cards = parseCards(path.join(__dirname, "input.example.txt"));

  const result = solvePartTwo(cards);

  expect(result).toBe(30);
});
