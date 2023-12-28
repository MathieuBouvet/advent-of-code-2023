import { Beam, Direction } from "../Beam";
import { Contraption } from "./Contraption";

const reflectionMap: Record<Direction, Direction> = {
  UP: "LEFT",
  DOWN: "RIGHT",
  LEFT: "UP",
  RIGHT: "DOWN",
};

class LeftMirror extends Contraption {
  constructor() {
    super("\\");
  }
  protected onBeamReceived(beam: Beam): Beam[] {
    return [beam.orient(reflectionMap[beam.direction])];
  }
}

export { LeftMirror };
