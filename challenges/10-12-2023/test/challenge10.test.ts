import path from "path";
import { parseTiles } from "../helpers/parseTiles";
import { solvePartOne } from "../solvePartOne";

test.each([
  { example: 1, expected: 4 },
  { example: 2, expected: 8 },
])(
  "test challenge 10 part one with example $example",
  ({ example, expected }) => {
    const tiles = parseTiles(
      path.join(__dirname, `input.example${example}.txt`)
    );
    const result = solvePartOne(tiles);
    expect(result).toBe(expected);
  }
);
