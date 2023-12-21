import { Tile } from "../helpers/parseTiles";

export type TileType = "|" | "-" | "L" | "J" | "7" | "F" | "." | "S";
export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type Position = { x: number; y: number };

function opposite(direction: Direction): Direction {
  switch (direction) {
    case "UP":
      return "DOWN";
    case "DOWN":
      return "UP";
    case "LEFT":
      return "RIGHT";
    case "RIGHT":
      return "LEFT";
  }
}

function movement(direction: Direction): Position {
  switch (direction) {
    case "UP":
      return { x: 0, y: -1 };
    case "DOWN":
      return { x: 0, y: 1 };
    case "LEFT":
      return { x: -1, y: 0 };
    case "RIGHT":
      return { x: 1, y: 0 };
  }
}

function moved(...positions: Position[]): Position {
  return positions.reduce(
    (acc, position) => {
      return { x: acc.x + position.x, y: acc.y + position.y };
    },
    { x: 0, y: 0 }
  );
}

function connectsFrom(tile: Tile, direction: Direction): boolean {
  return tile.connections.includes(opposite(direction));
}

export { opposite, movement, moved, connectsFrom };
