import { Grid } from "../../utils/Grid";
import { sum } from "../../utils/sum";
import { findLoop } from "./helpers/findLoop";
import { loadRockMap } from "./helpers/loadRockMap";
import { tiltEast, tiltNorth, tiltSouth, tiltWest } from "./helpers/tilt";

function solvePartTwo(rockMap: Grid<string>): number {
  const loopData = findLoop(rockMap);
  const loopLength = loopData.end - loopData.start;
  const cyclesToDo = (1_000_000_000 - loopData.start) % loopLength;

  const resumeRockMap = loadRockMap(loopData.gridStr);

  for (let i = 0; i < cyclesToDo; i++) {
    tiltNorth(resumeRockMap);
    tiltWest(resumeRockMap);
    tiltSouth(resumeRockMap);
    tiltEast(resumeRockMap);
  }
  return sum(
    [...resumeRockMap.columns()].map(column =>
      column.reduce((acc, cell, i) => {
        if (cell.value === "O") {
          return acc + column.length - i;
        }
        return acc;
      }, 0)
    )
  );
}

export { solvePartTwo };
