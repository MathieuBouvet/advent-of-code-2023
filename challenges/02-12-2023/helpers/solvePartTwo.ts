import { Game } from "../types";
import { getMinimumRequired } from "./getMinimumRequired";

function solvePartTwo(games: Game[]): number {
  const gamesRequirements = games.map(game =>
    getMinimumRequired(game.cubeDraws)
  );

  return gamesRequirements.reduce((acc, { red, green, blue }) => {
    return acc + red * green * blue;
  }, 0);
}

export { solvePartTwo };
