import { Position } from "../../../utils/Grid";

function getDistances([p1, p2]: [Position, Position]): Position {
  return {
    x: Math.abs(p1.x - p2.x),
    y: Math.abs(p1.y - p2.y),
  };
}

export { getDistances };
