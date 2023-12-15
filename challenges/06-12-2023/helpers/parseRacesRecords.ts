import { readFileSync } from "fs";

export type RaceRecord = {
  duration: number;
  distance: number;
};

function parseRacesRecords(path: string) {
  const file = readFileSync(path, "utf-8");
  const lines = file.split("\n");

  const [durations, distances] = lines.map(l =>
    (l.match(/(\d+)/g) ?? []).map(m => Number(m))
  );

  const raceRecords: RaceRecord[] = [];
  for (let i = 0; i < durations.length; i++) {
    const duration = durations[i];
    const distance = distances[i];

    if (duration != null && distance != null) {
      raceRecords.push({
        duration,
        distance,
      });
    }
  }
  return raceRecords;
}

export { parseRacesRecords };
