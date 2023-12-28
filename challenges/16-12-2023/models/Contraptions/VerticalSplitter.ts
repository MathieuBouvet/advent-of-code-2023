import { Beam } from "../Beam";
import { Contraption } from "./Contraption";

class VerticalSplitter extends Contraption {
  constructor() {
    super("|");
  }
  protected onBeamReceived(beam: Beam) {
    const beamDirection = beam.direction;

    if (beamDirection == "LEFT" || beamDirection === "RIGHT") {
      return [beam.orient("UP"), beam.copy().orient("DOWN")];
    }
    return [beam];
  }
}

export { VerticalSplitter };
