import { readFileSync } from "fs";

function parseSequence(path: string): string[] {
  const file = readFileSync(path, "utf-8");
  return file.split(",");
}

export { parseSequence };
