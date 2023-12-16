export type SolutionFn = (isPartTwo: boolean) => void;

type Solutions = Record<string, SolutionFn>;

import { solution01 } from "./01-12-2023/solution";
import { solution02 } from "./02-12-2023/solution";
import { challenge03 } from "./03-12-2023";
import { challenge04 } from "./04-12-2023";
import { challenge05 } from "./05-12-2023";
import { challenge06 } from "./06-12-2023";
import { challenge07 } from "./07-12-2023";
import { challenge08 } from "./08-12-2023";

const solutions: Solutions = {
  ["01"]: solution01,
  ["02"]: solution02,
  ["03"]: challenge03,
  ["04"]: challenge04,
  ["05"]: challenge05,
  ["06"]: challenge06,
  ["07"]: challenge07,
  ["08"]: challenge08,
};

export { solutions };
