import { areEquals } from "../../../utils/areEquals";
import { rangeSize } from "../../../utils/range";

function isSymetricalAtIndex(list: string[], index: number): boolean {
  if (index >= list.length - 1) {
    return false;
  }
  const size = Math.min(index + 1, list.length - (index + 1));
  const before = [...rangeSize(index, size, -1)].map(i => list[i]);
  const after = [...rangeSize(index + 1, size)].map(i => list[i]);

  return areEquals(before, after);
}

export { isSymetricalAtIndex };
