export type Cube = "red" | "green" | "blue";

export type CubeHandfull = Record<Cube, number>;

export type Game = {
  id: number;
  cubeDraws: CubeHandfull[];
};
