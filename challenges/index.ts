export type SolutionFn = (isPartTwo: boolean) => void;

type Solutions = Record<string, SolutionFn>;

import { solution01 } from "./01-12-2023/solution";
import { solution02 } from "./02-12-2023/solution";

const solutions: Solutions = {
  ["01"]: solution01,
  ["02"]: solution02,
};

export { solutions };
