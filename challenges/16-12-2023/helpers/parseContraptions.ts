import { readFileSync } from "fs";
import { Grid } from "../../../utils/Grid";
import { Contraption } from "../models/Contraptions/Contraption";
import { createContraption } from "../models/Contraptions/createContraption";

function parseContraptions(path: string): Grid<Contraption> {
  const file = readFileSync(path, "utf-8");
  const list2d = file
    .split("\n")
    .map(line => line.split("").map(c => createContraption(c)));
  return new Grid(list2d);
}

export { parseContraptions };
