import { readFileSync } from "fs";
import { RaceRecord } from "./parseRacesRecords";

function parseRaceRecordForPartTwo(path: string): RaceRecord {
  const file = readFileSync(path, "utf-8");
  const [duration, distance] = file
    .split("\n")
    .map(l => Number((l.match(/(\d+)/g) ?? []).join("")));

  return { duration, distance };
}

export { parseRaceRecordForPartTwo };
