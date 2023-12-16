import { readFileSync } from "fs";
import { Range } from "./range";

export type MapConfigEfficient = Range & {
  shift: number;
};
export type MapKind =
  | "seedToSoil"
  | "soilToFertilizer"
  | "fertilizerToWater"
  | "waterToLight"
  | "lightToTemperature"
  | "temperatureToHumidity"
  | "humidityToLocation";

export type MapsEfficient = Record<MapKind, MapConfigEfficient[]>;

function parseMap(rawMap: string): MapConfigEfficient[] {
  const [, rawMapLines] = rawMap.split(":\n");
  const lines = rawMapLines.split("\n");

  return lines
    .map(line => {
      const [destinationStart, start, range] = line
        .split(" ")
        .map(n => Number(n));
      return {
        start,
        end: start + range - 1,
        shift: destinationStart - start,
      };
    })
    .sort((a, b) => {
      return a.start - b.start;
    });
}

function parseMapsEfficient(path: string): MapsEfficient {
  const file = readFileSync(path, "utf-8");
  const [, ...rawMaps] = file.split("\n\n");

  const maps = rawMaps.map(rawMap => parseMap(rawMap));

  return {
    seedToSoil: maps[0],
    soilToFertilizer: maps[1],
    fertilizerToWater: maps[2],
    waterToLight: maps[3],
    lightToTemperature: maps[4],
    temperatureToHumidity: maps[5],
    humidityToLocation: maps[6],
  };
}

export { parseMapsEfficient };
