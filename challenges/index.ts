export type SolutionFn = (isPartTwo: boolean) => void;

type Solutions = Record<string, SolutionFn>;

import { solution01 } from "./01-12-2023/solution";
import { solution02 } from "./02-12-2023/solution";
import { challenge03 } from "./03-12-2023";

const solutions: Solutions = {
  ["01"]: solution01,
  ["02"]: solution02,
  ["03"]: challenge03,
};

export { solutions };
