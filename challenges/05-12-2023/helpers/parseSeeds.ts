import { readFileSync } from "fs";

function parseSeeds(path: string): number[] {
  const file = readFileSync(path, "utf-8");
  const [seedLine] = file.split("\n\n");
  const [_, rawSeeds] = seedLine.split(": ");

  return rawSeeds.split(" ").map(r => Number(r));
}

export { parseSeeds };
