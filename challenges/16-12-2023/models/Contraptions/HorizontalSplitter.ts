import { Beam } from "../Beam";
import { Contraption } from "./Contraption";

class HorizontalSplitter extends Contraption {
  constructor() {
    super("-");
  }
  protected onBeamReceived(beam: Beam) {
    const beamDirection = beam.direction;

    if (beamDirection == "UP" || beamDirection === "DOWN") {
      return [beam.orient("LEFT"), beam.copy().orient("RIGHT")];
    }
    return [beam];
  }
}

export { HorizontalSplitter };
