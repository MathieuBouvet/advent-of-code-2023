import { CubeHandfull } from "../types";

function getMinimumRequired(cubeHandfulls: CubeHandfull[]): CubeHandfull {
  return cubeHandfulls.reduce(
    (acc, handfull) => {
      if (handfull.red > acc.red) {
        acc.red = handfull.red;
      }
      if (handfull.green > acc.green) {
        acc.green = handfull.green;
      }
      if (handfull.blue > acc.blue) {
        acc.blue = handfull.blue;
      }
      return acc;
    },
    {
      blue: 0,
      green: 0,
      red: 0,
    }
  );
}

export { getMinimumRequired };
