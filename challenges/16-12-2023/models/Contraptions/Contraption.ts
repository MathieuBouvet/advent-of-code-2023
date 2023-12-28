import { Beam, Direction } from "../Beam";

abstract class Contraption {
  readonly type: string;
  protected seenDirections: Direction[];

  protected abstract onBeamReceived(beam: Beam): Beam[];

  constructor(type: string) {
    this.type = type;
    this.seenDirections = [];
  }

  get isEnergized() {
    return this.seenDirections.length > 0;
  }

  beamReceived(beam: Beam) {
    if (this.seenDirections.includes(beam.direction)) {
      return [];
    }
    this.seenDirections.push(beam.direction);
    return this.onBeamReceived(beam);
  }
}

export { Contraption };
