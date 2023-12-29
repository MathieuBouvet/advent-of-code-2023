import { Grid } from "../../utils/Grid";
import { Heap } from "../../utils/Heap";
import {
  Direction,
  Position,
  moved,
  movement,
} from "../10-12-2023/models/models";
import { getValidDirections } from "./helpers/getValidDirections";

export type TileMovement = {
  x: number;
  y: number;
  direction: Direction;
  stepTakenInDirection: number;
  totalHeatLoss: number;
  parent: TileMovement | null;
};

function solvePartOne(heatLosses: Grid<number>): TileMovement | null {
  const end: Position = {
    x: heatLosses.width - 1,
    y: heatLosses.height - 1,
  };
  const pathCostCache: Record<string, number> = {};
  const queue = new Heap<TileMovement>(
    (a, b) => a.totalHeatLoss - b.totalHeatLoss
  );
  queue.push({
    x: 0,
    y: 0,
    direction: "RIGHT",
    stepTakenInDirection: 0,
    totalHeatLoss: 0,
    parent: null,
  });
  for (let tileMovement of queue.exhaust()) {
    if (tileMovement.x === end.x && tileMovement.y === end.y) {
      return tileMovement;
    }
    const possibleDirs = getValidDirections(tileMovement);
    for (let dir of possibleDirs) {
      const { x, y } = moved(movement(dir), tileMovement);
      const heatLoss = heatLosses.at({ x, y });
      if (heatLoss != null) {
        const nextTotalHeatLoss = heatLoss + tileMovement.totalHeatLoss;
        const nextMoveStepTaken =
          dir === tileMovement.direction
            ? tileMovement.stepTakenInDirection + 1
            : 1;
        const cacheKey = `(${x},${y},${tileMovement.x},${tileMovement.y},${tileMovement.direction},${tileMovement.stepTakenInDirection})`;
        const cachedPathCost = pathCostCache[cacheKey] ?? Infinity;

        if (nextTotalHeatLoss < cachedPathCost) {
          pathCostCache[cacheKey] = nextTotalHeatLoss;
          queue.push({
            x,
            y,
            totalHeatLoss: nextTotalHeatLoss,
            direction: dir,
            stepTakenInDirection: nextMoveStepTaken,
            parent: tileMovement,
          });
        }
      }
    }
  }
  return null;
}

export { solvePartOne };
