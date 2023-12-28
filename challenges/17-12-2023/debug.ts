#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseHeatLossMap } from "./helpers/parseHeatLossMap";
import { TileMovement, solvePartOne } from "./solvePartOne";
import { getValidDirections } from "./helpers/getValidDirections";

const heatLosses = parseHeatLossMap(path.join(__dirname, "test/input.txt"));

const result = solvePartOne(heatLosses);

const tilePath: string[] = [];
let tileMovement = result ?? null;
while (tileMovement != null) {
  tilePath.push(
    `(${tileMovement.x},${tileMovement.y}): ${tileMovement.direction}, ${tileMovement.totalHeatLoss}`
  );
  tileMovement = tileMovement.parent;
}
tilePath.reverse();
for (let t of tilePath) {
  console.log(t);
}
