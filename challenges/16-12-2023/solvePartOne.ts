import { Grid } from "../../utils/Grid";
import { Beam } from "./models/Beam";
import { Contraption } from "./models/Contraptions/Contraption";

function solvePartOne(
  contraptions: Grid<Contraption>,
  limit: number = Infinity
) {
  let i = 0;
  const defaultBeam = new Beam({ x: -1, y: 0, direction: "RIGHT" });
  const beams = [defaultBeam];

  let beam: Beam | undefined;
  while ((beam = beams.pop()) != null && i < limit) {
    beam.move();
    const { x, y } = beam;
    const contraption = contraptions.at({ x, y });
    if (contraption != null) {
      const beamsToAdd = contraption.beamReceived(beam);
      beams.push(...beamsToAdd);
    }

    i++;
  }

  return [...contraptions.cells()].reduce((acc, cell) => {
    if (cell.value?.isEnergized) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

export { solvePartOne };
