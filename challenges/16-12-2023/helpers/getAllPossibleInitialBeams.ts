import { Grid } from "../../../utils/Grid";
import { Beam } from "../models/Beam";
import { Contraption } from "../models/Contraptions/Contraption";

function getAllPossibleInitialBeams(contraptions: Grid<Contraption>): Beam[] {
  let beams: Beam[] = [];
  for (let x = 0; x < contraptions.width; x++) {
    beams.push(new Beam({ x, y: -1, direction: "DOWN" }));
    beams.push(new Beam({ x, y: contraptions.height, direction: "UP" }));
  }
  for (let y = 0; y < contraptions.height; y++) {
    beams.push(new Beam({ y, x: -1, direction: "RIGHT" }));
    beams.push(new Beam({ y, x: contraptions.width, direction: "LEFT" }));
  }
  return beams;
}

export { getAllPossibleInitialBeams };
