import { Grid } from "../../../utils/Grid";

function loadRockMap(str: string): Grid<string> {
  return new Grid(str.split("\n").map(line => line.split("")));
}

export { loadRockMap };
