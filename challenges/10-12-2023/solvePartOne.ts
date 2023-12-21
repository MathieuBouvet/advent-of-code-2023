import { Tiles } from "./models/Tiles";

function solvePartOne(tiles: Tiles): number {
  const pipeLoop = [...tiles.pipeLoopTiles()];

  return Math.ceil(pipeLoop.length / 2);
}

export { solvePartOne };
