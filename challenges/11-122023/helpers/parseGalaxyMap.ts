import { readFileSync } from "fs";
import { Grid } from "../../../utils/Grid";

function parseGalaxyMap(path: string) {
  const file = readFileSync(path, "utf-8");
  const list2d = file.split("\n").map(line => line.split(""));

  return new Grid(list2d);
}

export { parseGalaxyMap };
