import { readFileSync } from "fs";
import { Direction, Position, TileType } from "../models/models";
import { areEquivalent } from "../../../utils/areEquivalent";

export type Tile = {
  position: Position;
  connections: Direction[];
  type: TileType;
  isOutsideLoop?: boolean;
};

const connectionMapping: Record<TileType, Direction[]> = {
  "-": ["LEFT", "RIGHT"],
  "7": ["LEFT", "DOWN"],
  F: ["DOWN", "RIGHT"],
  J: ["LEFT", "UP"],
  L: ["UP", "RIGHT"],
  "|": ["UP", "DOWN"],
  ".": [],
  " ": [],
  S: [],
};

function checktypeValidity(type: string): asserts type is TileType {
  if (!["|", "-", "L", "J", "7", "F", ".", "S", " "].includes(type)) {
    throw new Error(`tile ${type} unrocognized`);
  }
}

function getConnections(type: TileType): Direction[] {
  return connectionMapping[type] ?? ".";
}

function getTypeFromConnections(connections: Direction[]): TileType {
  if (connections.length !== 2) {
    return ".";
  }
  const [type = "."] =
    Object.entries(connectionMapping).find(([, c]) => {
      return areEquivalent(connections, c);
    }) ?? [];
  return type as TileType;
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

export { parseTiles, getTypeFromConnections };
