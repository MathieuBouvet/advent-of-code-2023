import { Grid } from "../../utils/Grid";
import { getAllPossibleInitialBeams } from "./helpers/getAllPossibleInitialBeams";
import { Contraption } from "./models/Contraptions/Contraption";
import { createContraption } from "./models/Contraptions/createContraption";
import { solvePartOne } from "./solvePartOne";

function solvePartTwo(contraptions: Grid<Contraption>): number {
  const initialBeams = getAllPossibleInitialBeams(contraptions);
  return Math.max(
    ...initialBeams.map(beam => {
      const contraptionsCopy = new Grid<Contraption>(
        contraptions
          .toString(el => el?.type ?? ".")
          .split("\n")
          .map(line => line.split("").map(c => createContraption(c)))
      );
      return solvePartOne(contraptionsCopy, beam);
    })
  );
}

export { solvePartTwo };
