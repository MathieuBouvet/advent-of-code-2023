import { Game } from "../types";
import { possibilityChecker } from "./possibilityChecker";

function solvePartOne(games: Game[]): number {
  const isPossible = possibilityChecker({ red: 12, green: 13, blue: 14 });
  const possibleGames = games.filter(game =>
    game.cubeDraws.every(handfull => isPossible(handfull))
  );

  return possibleGames.reduce((acc, game) => {
    return acc + game.id;
  }, 0);
}

export { solvePartOne };
