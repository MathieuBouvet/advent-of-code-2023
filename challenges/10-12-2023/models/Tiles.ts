import {
  Tile,
  getTypeFromConnections,
  parseTiles,
} from "../helpers/parseTiles";
import {
  Direction,
  Position,
  allDirections,
  connectsFrom,
  moved,
  movement,
  opposite,
} from "./models";

class Tiles {
  private isEnlarged: boolean;
  private tiles: Tile[][];
  private _width: number;
  private _height: number;
  private _startTile: Tile;

  constructor(filePath: string, isEnlarged?: boolean);
  constructor(tiles: Tile[][], isEnlarged?: boolean);
  constructor(input: Tile[][] | string, isEnlarged = false) {
    this.isEnlarged = isEnlarged;
    this.tiles = typeof input === "string" ? parseTiles(input) : input;
    this._height = this.tiles.length;
    this._width = this.tiles[0]?.length ?? 0;

    const startTile = this.findTile(tile => tile.type === "S");
    if (startTile == null) {
      throw new Error("no start found");
    }
    this.setTileConnections(startTile);
    this._startTile = startTile;
  }

  get startTile() {
    return this._startTile;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  findTile(predicate: (tile: Tile) => boolean): Tile | undefined {
    for (let tile of this.allTiles()) {
      if (predicate(tile)) {
        return tile;
      }
    }
  }

  *allTiles(): Generator<Tile> {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        yield this.getTileAt({ x, y }) as Tile;
      }
    }
  }

  getTileAt({ x, y }: Position): Tile | undefined {
    return this.tiles[y]?.[x];
  }

  getAdjacentTiles(tile: Tile) {
    return allDirections.map((direction): [Direction, Tile | undefined] => {
      const adjacentTile = this.getTileAt(
        moved(tile.position, movement(direction))
      );
      return [direction, adjacentTile];
    });
  }

  setTileConnections(tile: Tile): Direction[] {
    const adjacentTiles = this.getAdjacentTiles(tile);
    tile.connections = adjacentTiles
      .filter(([direction, tile]) => {
        if (tile == null) {
          return false;
        }
        return connectsFrom(tile, direction);
      })
      .map(([direction]) => direction);
    return tile.connections;
  }

  toString(): string {
    return this.tiles
      .map(line =>
        line
          .map(tile => {
            return tile.isOutsideLoop ? "O" : tile.type;
          })
          .join("")
      )
      .join("\n");
  }

  *pipeLoopTiles(): Generator<Tile> {
    let currentTile = this.startTile;
    let previousMove: Direction;
    do {
      yield currentTile;
      const nextMove = currentTile.connections.filter(
        c => c !== previousMove
      )[0];
      if (nextMove == null) {
        throw new Error("cannot move");
      }
      const nextTile = this.getTileAt(
        moved(currentTile.position, movement(nextMove))
      );
      if (nextTile == null) {
        throw new Error("undefined tile");
      }
      currentTile = nextTile;
      previousMove = opposite(nextMove);
    } while (currentTile.type !== "S");
  }

  *inBetweenTiles(): Generator<Tile> {
    for (let tile of this.allTiles()) {
      const { x, y } = tile.position;
      if (y % 2 === 0 || x % 2 === 0) {
        yield tile;
      }
    }
  }

  *originalTiles(): Generator<Tile> {
    for (let tile of this.allTiles()) {
      const { x, y } = tile.position;
      if (x % 2 === 1 || y % 2 === 1) {
        yield tile;
      }
    }
  }

  getCleanedTiles(): Tiles {
    const newTilesArray: Tile[][] = this.tiles.map(line =>
      line.map(t => ({
        position: { ...t.position },
        connections: [],
        type: t.type === "S" ? "S" : ".",
      }))
    );
    const newTiles = new Tiles(newTilesArray);

    for (let tile of this.pipeLoopTiles()) {
      const newTile = newTiles.getTileAt(tile.position);
      if (newTile != null) {
        newTile.connections = [...tile.connections];
        newTile.type = tile.type;
      }
    }

    return newTiles;
  }

  getEnlarged(): Tiles {
    if (this.isEnlarged) {
      console.warn("the tiles instance is already enlarged");
    }
    const enlargedRawTiles: Tile[][] = [];

    for (let y = 0; y < this.height * 2 + 1; y++) {
      enlargedRawTiles.push(new Array(this.width * 2 + 1));
      for (let x = 0; x < this.width * 2 + 1; x++) {
        const tile = this.getTileAt({ x: (x - 1) / 2, y: (y - 1) / 2 });
        enlargedRawTiles[y][x] = {
          position: { x, y },
          connections: tile?.connections ?? [],
          type: tile?.type ?? ".",
        };
      }
    }

    const enlarged = new Tiles(enlargedRawTiles, true);
    enlarged.startTile.connections = [...this.startTile.connections];

    for (let inBetweenTile of enlarged.inBetweenTiles()) {
      const connections = enlarged.setTileConnections(inBetweenTile);
      inBetweenTile.type = getTypeFromConnections(connections);
    }

    return enlarged;
  }

  markOutsideTiles(): Tiles {
    const visited: Record<string, true> = {};
    const tilesToHandle: Tile[] = [this.getTileAt({ x: 0, y: 0 }) as Tile];
    let tile: Tile | undefined;
    while (((tile = tilesToHandle.pop()), tile != null)) {
      const { x, y } = tile.position;
      if (tile.type === ".") {
        tile.isOutsideLoop = true;
      }
      const nextTiles = this.getAdjacentTiles(tile)
        .map(([, tile]) => tile)
        .filter((tile): tile is Tile => tile != null)
        .filter(tile => {
          const { x, y } = tile.position;
          return !visited[`(${x},${y})`] && tile.type === ".";
        });
      tilesToHandle.push(...nextTiles);

      visited[`(${x},${y})`] = true;
    }
    return this;
  }

  getReduced(): Tiles {
    const rawReducedTiles: Tile[][] = [];
    for (let tile of this.originalTiles()) {
      const { x, y } = tile.position;
      const reducedX = (x - 1) / 2;
      const reducedY = (y - 1) / 2;
      if (rawReducedTiles[reducedY] == null) {
        rawReducedTiles[reducedY] = [];
      }
      rawReducedTiles[reducedY][reducedX] = {
        connections: [...tile.connections],
        type: tile.type,
        isOutsideLoop: tile.isOutsideLoop,
        position: {
          x: reducedX,
          y: reducedY,
        },
      };
    }
    return new Tiles(rawReducedTiles);
  }

  countInsideTiles() {
    const cleaned = this.getCleanedTiles();
    const enlarged = cleaned.getEnlarged();
    enlarged.markOutsideTiles();
    const reduced = enlarged.getReduced();

    const outsideCount = [...reduced.allTiles()].reduce((acc, tile) => {
      if (tile.isOutsideLoop) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const loop = [...reduced.pipeLoopTiles()].length;

    return reduced.height * reduced.width - outsideCount - loop;
  }
}

export { Tiles };
