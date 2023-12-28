import { idGenerator } from "../../../utils/idGenerator";
import { moved, movement } from "../../10-12-2023/models/models";

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const getBeamName = idGenerator("beam");

class Beam {
  public name: string;
  public x: number;
  public y: number;
  public direction: Direction;

  constructor({
    x = 0,
    y = 0,
    direction,
    name,
  }: {
    name?: string;
    x?: number;
    y?: number;
    direction: Direction;
  }) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.name = name ?? getBeamName();
  }

  move(): Beam {
    const { x, y } = moved({ x: this.x, y: this.y }, movement(this.direction));
    this.x = x;
    this.y = y;
    return this;
  }

  orient(direction: Direction): Beam {
    this.direction = direction;
    return this;
  }

  copy(): Beam {
    return new Beam({ x: this.x, y: this.y, direction: this.direction });
  }
}

export { Beam };
