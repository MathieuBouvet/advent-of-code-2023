import { sum } from "../../utils/sum";
import { memoizedHash } from "./helpers/hash";
import { Instruction } from "./helpers/parseInstructions";

type Box = Record<string, number>;
type Boxes = Record<number, Box>;

function solvePartTwo(instructions: Instruction[]): number {
  const hash = memoizedHash();
  const boxes: Boxes = {};
  instructions.forEach(instruction => {
    const boxIndex = hash(instruction.label);
    if (boxes[boxIndex] == null) {
      boxes[boxIndex] = {};
    }
    const box = boxes[boxIndex];
    if (instruction.operation === "REMOVE") {
      delete box[instruction.label];
    }
    if (instruction.operation === "SET") {
      box[instruction.label] = instruction.focalLength;
    }
  });

  return sum(
    Object.entries(boxes).map(([boxIndex, box]) => {
      return sum(
        Object.values(box ?? {}).map(
          (focalLength, i) => (Number(boxIndex) + 1) * (i + 1) * focalLength
        )
      );
    })
  );
}

export { solvePartTwo };
