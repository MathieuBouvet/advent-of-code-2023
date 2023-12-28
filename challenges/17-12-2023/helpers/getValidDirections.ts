import { Direction, opposite } from "../../10-12-2023/models/models";
import { TileMovement } from "../solvePartOne";

function getValidDirections(tileMovement: TileMovement): Direction[] {
  return (["UP", "DOWN", "LEFT", "RIGHT"] as const)
    .filter(dir => dir !== opposite(tileMovement.direction))
    .filter(
      dir =>
        tileMovement.stepTakenInDirection < 3 || dir !== tileMovement.direction
    );
}

export { getValidDirections };
