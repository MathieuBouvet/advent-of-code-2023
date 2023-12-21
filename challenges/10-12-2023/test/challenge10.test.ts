import path from "path";
import { solvePartOne } from "../solvePartOne";
import { Tiles } from "../models/Tiles";
import { solvePartTwo } from "../solvePartTwo";

test.each([
  { example: 1, expected: 4 },
  { example: 2, expected: 8 },
])(
  "test challenge 10 part one with example $example",
  ({ example, expected }) => {
    const tiles = new Tiles(
      path.join(__dirname, `input.example${example}.txt`)
    );
    const result = solvePartOne(tiles);
    expect(result).toBe(expected);
  }
);

test.each([
  { example: 3, expected: 4 },
  { example: 4, expected: 8 },
  { example: 5, expected: 10 },
])(
  "test challenge 10 part two with example $example",
  ({ example, expected }) => {
    const tiles = new Tiles(
      path.join(__dirname, `input.example${example}.txt`)
    );
    const result = solvePartTwo(tiles);
    expect(result).toBe(expected);
  }
);
