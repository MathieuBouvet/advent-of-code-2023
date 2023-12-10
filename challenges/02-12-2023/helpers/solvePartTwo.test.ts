import { Game } from "../types";
import { solvePartTwo } from "./solvePartTwo";

test("challenge 2 part two", () => {
  const games: Game[] = [
    {
      id: 1,
      cubeDraws: [
        { blue: 3, red: 4, green: 0 },
        { red: 1, green: 2, blue: 0 },
        { green: 2, blue: 6, red: 0 },
      ],
    },
    {
      id: 2,
      cubeDraws: [
        { blue: 1, green: 2, red: 0 },
        { green: 3, blue: 4, red: 1 },
        { green: 1, blue: 1, red: 0 },
      ],
    },
    {
      id: 3,
      cubeDraws: [
        { green: 8, blue: 6, red: 20 },
        { blue: 5, red: 4, green: 13 },
        { green: 5, red: 1, blue: 0 },
      ],
    },
    {
      id: 4,
      cubeDraws: [
        { green: 1, red: 3, blue: 6 },
        { green: 3, red: 6, blue: 0 },
        { green: 3, blue: 15, red: 14 },
      ],
    },
    {
      id: 5,
      cubeDraws: [
        { red: 6, blue: 1, green: 3 },
        { blue: 2, red: 1, green: 2 },
      ],
    },
  ];
  const solution = solvePartTwo(games);

  expect(solution).toBe(2286);
});
