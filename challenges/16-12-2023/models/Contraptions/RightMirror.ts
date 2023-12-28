import { Beam, Direction } from "../Beam";
import { Contraption } from "./Contraption";

const reflectionMap: Record<Direction, Direction> = {
  UP: "RIGHT",
  DOWN: "LEFT",
  LEFT: "DOWN",
  RIGHT: "UP",
};

class RightMirror extends Contraption {
  constructor() {
    super("/");
  }
  protected onBeamReceived(beam: Beam): Beam[] {
    return [beam.orient(reflectionMap[beam.direction])];
  }
}

export { RightMirror };
