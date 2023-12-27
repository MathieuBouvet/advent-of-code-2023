import { sum } from "../../utils/sum";
import { hash } from "./helpers/hash";

function solvePartOne(sequence: string[]): number {
  return sum(sequence.map(str => hash(str)));
}

export { solvePartOne };
