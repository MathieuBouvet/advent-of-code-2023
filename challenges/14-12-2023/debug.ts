#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseRockMap } from "./helpers/parseRockMap";
import { solvePartOne } from "./solvePartOne";
import { tiltEast, tiltNorth, tiltSouth, tiltWest } from "./helpers/tilt";

const rockMap = parseRockMap(path.join(__dirname, "test/input.txt"));
const cache: Record<string, number> = {};

// let i = 0;
// while (true) {
//   tiltNorth(rockMap);
//   const northState = rockMap.toString();
//   const alreadySeenAt = cache[northState];
//   if (alreadySeenAt == null) {
//     cache[northState] = i;
//   } else {
//     console.log(`state ${i} already seen at iteration ${alreadySeenAt}`);
//     console.log(rockMap.toString());
//     break;
//   }
//   tiltWest(rockMap);
//   tiltSouth(rockMap);
//   tiltEast(rockMap);
//   i++;
// }

for (let i = 0; i < 3; i++) {
  tiltNorth(rockMap);
  tiltWest(rockMap);
  tiltSouth(rockMap);
  tiltEast(rockMap);
}
console.log(rockMap.toString());
