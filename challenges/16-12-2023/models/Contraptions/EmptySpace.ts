import { Beam } from "../Beam";
import { Contraption } from "./Contraption";

class EmptySpace extends Contraption {
  constructor() {
    super(".");
  }

  protected onBeamReceived(beam: Beam) {
    return [beam];
  }
}

export { EmptySpace };
