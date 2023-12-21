import { Tile } from "./parseTiles";

function findTile(
  tiles: Tile[][],
  predicate: (t: Tile) => boolean
): Tile | undefined {
  for (let y = 0; y < tiles.length; y++) {
    const line = tiles[y];
    for (let x = 0; x < line.length; x++) {
      const tile = line[x];
      if (predicate(tile)) {
        return tile;
      }
    }
  }
}

export { findTile };
