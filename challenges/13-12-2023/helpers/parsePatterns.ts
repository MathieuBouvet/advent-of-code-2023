import { readFileSync } from "fs";
import { Grid } from "../../../utils/Grid";

function parsePatterns(path: string): Grid<string>[] {
  const file = readFileSync(path, "utf-8");
  const patterns = file.split("\n\n");
  return patterns.map(rawPattern => {
    const list2d = rawPattern.split("\n").map(line => {
      return line.split("");
    });
    return new Grid(list2d);
  });
}

export { parsePatterns };
