import { parseSeeds } from "./parseSeeds";

export type SeedRange = {
  start: number;
  length: number;
};

function parseSeedRanges(path: string): SeedRange[] {
  const seeds = parseSeeds(path);
  const seedRanges: SeedRange[] = [];
  for (let i = 0; i < seeds.length - 1; i += 2) {
    seedRanges.push({
      start: seeds[i],
      length: seeds[i + 1],
    });
  }
  return seedRanges;
}

export { parseSeedRanges };
