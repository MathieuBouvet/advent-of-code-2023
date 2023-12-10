import { CubeHandfull, Game } from "../types";

function possibilityChecker(checkAgainst: CubeHandfull) {
  return (cubeHandfull: CubeHandfull) => {
    return (
      cubeHandfull.blue <= checkAgainst.blue &&
      cubeHandfull.green <= checkAgainst.green &&
      cubeHandfull.red <= checkAgainst.red
    );
  };
}

export { possibilityChecker };
