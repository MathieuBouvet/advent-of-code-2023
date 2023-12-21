import {
  Direction,
  connectsFrom,
  moved,
  movement,
  opposite,
} from "../models/models";
import { findTile } from "./findTile";
import { Tile } from "./parseTiles";

export type Walk = [Tile, Direction];

function getInitialwalk(tiles: Tile[][]): Walk {
  const startTile = findTile(tiles, t => t.type === "S");
  if (startTile == null) {
    throw new Error("no start found");
  }
  const moves: Walk[] = (["UP", "DOWN", "LEFT", "RIGHT"] as const)
    .map(direction => {
      const { x, y } = moved(startTile.position, movement(direction));
      return [tiles[y][x], direction] as Walk;
    })
    .filter(walk => walk[0] != null)
    .filter(walk => connectsFrom(walk[0], walk[1]));

  const firstMove = moves[0];
  if (firstMove == null) {
    throw new Error("nowhere to go");
  }
  return [firstMove[0], opposite(firstMove[1])];
}

function walkTiles(
  tiles: Tile[][],
  currentTile: Tile,
  cameFrom: Direction
): Walk {
  const willGoTo = currentTile.connections.filter(c => c !== cameFrom)[0];
  if (willGoTo == null) {
    throw new Error("nowhere to go");
  }
  const { x, y } = moved(currentTile.position, movement(willGoTo));

  return [tiles[y][x], opposite(willGoTo)];
}

export { walkTiles, getInitialwalk };
