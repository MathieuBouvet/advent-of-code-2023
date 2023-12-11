import { readFileSync } from "fs";

export type MapConfig = {
  sourceStart: number;
  destinationStart: number;
  range: number;
};

export type MapKind =
  | "seedToSoil"
  | "soilToFertilizer"
  | "fertilizerToWater"
  | "waterToLight"
  | "lightToTemperature"
  | "temperatureToHumidity"
  | "humidityToLocation";

export type Maps = Record<MapKind, MapConfig[]>;

function parseMap(rawMap: string): MapConfig[] {
  const [, rawMapLines] = rawMap.split(":\n");
  const lines = rawMapLines.split("\n");

  return lines.map(line => {
    const [destinationStart, sourceStart, range] = line
      .split(" ")
      .map(n => Number(n));
    return {
      destinationStart,
      sourceStart,
      range,
    };
  });
}

function parseMaps(path: string): Maps {
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

export { parseMaps };
