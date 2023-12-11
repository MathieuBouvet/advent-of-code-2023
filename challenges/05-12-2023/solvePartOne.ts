import { getMappingFns } from "./helpers/getMappingFns";
import { Maps } from "./helpers/parseMaps";

function solvePartOne(maps: Maps, seeds: number[]) {
  const {
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation,
  } = getMappingFns(maps);
  const locations = seeds.map(seed =>
    humidityToLocation(
      temperatureToHumidity(
        lightToTemperature(
          waterToLight(fertilizerToWater(soilToFertilizer(seedToSoil(seed))))
        )
      )
    )
  );

  return Math.min(...locations);
}

export { solvePartOne };
