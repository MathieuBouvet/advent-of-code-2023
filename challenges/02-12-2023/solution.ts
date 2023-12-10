import { readFileSync } from "fs";
import path from "path";
import { parseGame } from "./helpers/parsers";
import { solvePartOne } from "./helpers/solvePartOne";
import { solvePartTwo } from "./helpers/solvePartTwo";

function solution02(isPartTwo: boolean) {
  const lines = readFileSync(path.join(__dirname, "input.txt"), "utf-8").split(
    "\n"
  );
  const games = lines.map(line => parseGame(line));

  const solve = isPartTwo ? solvePartTwo : solvePartOne;

  const solutionNumber = solve(games);

  console.log(
    `The solution for challenge 02 ${isPartTwo ? "(part two)" : ""} is :`,
    solutionNumber
  );
}

export { solution02 };
