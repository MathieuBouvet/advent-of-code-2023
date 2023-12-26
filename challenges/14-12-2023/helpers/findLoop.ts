import { Grid } from "../../../utils/Grid";
import { tiltEast, tiltNorth, tiltSouth, tiltWest } from "./tilt";

function findLoop(rockMap: Grid<string>) {
  const cache: Record<string, number> = {};
  let i = 1;
  while (true) {
    tiltNorth(rockMap);
    tiltWest(rockMap);
    tiltSouth(rockMap);
    tiltEast(rockMap);
    const gridStr = rockMap.toString();
    const cached = cache[gridStr];
    if (cached != null) {
      return {
        start: cached,
        end: i,
        gridStr,
      };
    }
    cache[gridStr] = i;
    i++;
  }
}

export { findLoop };
