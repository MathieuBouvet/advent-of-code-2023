import { readFileSync } from "fs";
import { Direction, Position, TileType } from "../models/models";

export type Tile = {
  position: Position;
  connections: Direction[];
  type: TileType;
};

function checktypeValidity(type: string): asserts type is TileType {
  if (!["|", "-", "L", "J", "7", "F", ".", "S"].includes(type)) {
    throw new Error(`tile ${type} unrocognized`);
  }
}

function getConnections(type: TileType): Direction[] {
  switch (type) {
    case "-":
      return ["LEFT", "RIGHT"];
    case "7":
      return ["LEFT", "DOWN"];
    case "F":
      return ["DOWN", "RIGHT"];
    case "J":
      return ["LEFT", "UP"];
    case "L":
      return ["UP", "RIGHT"];
    case "|":
      return ["UP", "DOWN"];
    case ".":
      return [];
    case "S":
      return ["UP", "DOWN", "LEFT", "RIGHT"];
  }
}

function parseTiles(path: string): Tile[][] {
  const file = readFileSync(path, "utf-8");
  const lines = file.split("\n");
  return lines.map((line, y) =>
    line.split("").map((type, x) => {
      checktypeValidity(type);
      return {
        connections: getConnections(type),
        position: { x, y },
        type,
      };
    })
  );
}

export { parseTiles };
