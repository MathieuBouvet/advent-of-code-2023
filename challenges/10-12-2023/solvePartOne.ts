import { findTile } from "./helpers/findTile";
import { Tile } from "./helpers/parseTiles";
import { getInitialwalk, walkTiles } from "./helpers/walkTiles";

function solvePartOne(tiles: Tile[][]): number {
  let currentWalk = getInitialwalk(tiles);
  let stepTaken = 1;
  while (currentWalk[0].type !== "S") {
    currentWalk = walkTiles(tiles, ...currentWalk);
    stepTaken++;
  }

  return Math.ceil(stepTaken / 2);
}

export { solvePartOne };
