import { readFileSync } from "fs";
import { Grid } from "../../../utils/Grid";

function parseHeatLossMap(path: string): Grid<number> {
  const file = readFileSync(path, "utf-8");
  return new Grid(
    file.split("\n").map(line => line.split("").map(c => Number(c)))
  );
}

export { parseHeatLossMap };
