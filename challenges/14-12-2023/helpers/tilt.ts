import { Grid } from "../../../utils/Grid";
import { getRockGroups } from "./rockGroup";

function tiltNorth(rockMap: Grid<string>): void {
  [...rockMap.columns()].forEach(columns =>
    getRockGroups(columns).forEach(group =>
      group.rocks.forEach(({ x, y }, i) => {
        rockMap.set({ x, y }, () => ".");
        rockMap.set({ x, y: group.start + 1 + i }, () => "O");
      })
    )
  );
}

function tiltSouth(rockMap: Grid<string>): void {
  [...rockMap.columns()].forEach(columns =>
    getRockGroups(columns).forEach(group =>
      group.rocks.reverse().forEach(({ x, y }, i) => {
        rockMap.set({ x, y }, () => ".");
        rockMap.set({ x, y: group.end - 1 - i }, () => "O");
      })
    )
  );
}

function tiltEast(rockMap: Grid<string>): void {
  [...rockMap.lines()].forEach(columns =>
    getRockGroups(columns).forEach(group =>
      group.rocks.reverse().forEach(({ x, y }, i) => {
        rockMap.set({ x, y }, () => ".");
        rockMap.set({ y, x: group.end - 1 - i }, () => "O");
      })
    )
  );
}

function tiltWest(rockMap: Grid<string>): void {
  [...rockMap.lines()].forEach(columns =>
    getRockGroups(columns).forEach(group =>
      group.rocks.forEach(({ x, y }, i) => {
        rockMap.set({ x, y }, () => ".");
        rockMap.set({ y, x: group.start + 1 + i }, () => "O");
      })
    )
  );
}

export { tiltNorth, tiltSouth, tiltEast, tiltWest };
