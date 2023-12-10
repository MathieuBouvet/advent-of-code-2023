import { readFileSync } from "fs";

function parseInput(path: string) {
  return readFileSync(path, "utf-8").split("\n");
}

export { parseInput };
