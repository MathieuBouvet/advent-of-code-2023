import { readFileSync } from "fs";

export type Instruction = Set | Remove;

type Set = {
  label: string;
  operation: "SET";
  focalLength: number;
};

type Remove = {
  label: string;
  operation: "REMOVE";
};

function parseInstructions(path: string): Instruction[] {
  const file = readFileSync(path, "utf-8");
  return file.split(",").map(str => {
    const match = str.match(/^(.*)(-|=)(\d)?$/);
    if (match == null) {
      throw new Error(`cannot parse instruction ${str}`);
    }
    const [_, label, operation, focalLength] = match;

    if (operation === "-") {
      return {
        label,
        operation: "REMOVE",
      };
    }
    if (operation === "=") {
      return {
        label,
        operation: "SET",
        focalLength: Number(focalLength),
      };
    }
    throw new Error(`unrocognized operation ${operation}`);
  });
}

export { parseInstructions };
