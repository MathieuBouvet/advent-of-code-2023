import { readFileSync } from "fs";

function parseReport(path: string): number[][] {
  const file = readFileSync(path, "utf-8");
  const lines = file.split("\n");

  return lines.map(line => line.split(" ").map(n => Number(n)));
}

export { parseReport };
