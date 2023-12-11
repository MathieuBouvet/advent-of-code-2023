import { getMappingFns } from "./helpers/getMappingFns";
import { Maps } from "./helpers/parseMaps";
import { SeedRange } from "./helpers/parseSeedRanges";

function solvePartTwo(maps: Maps, seedRanges: SeedRange[]): number {
  const {
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation,
  } = getMappingFns(maps);
  const getLocation = (x: number) =>
    humidityToLocation(
      temperatureToHumidity(
        lightToTemperature(
          waterToLight(fertilizerToWater(soilToFertilizer(seedToSoil(x))))
        )
      )
    );

  let minLocation = Infinity;
  seedRanges.forEach(seedRange => {
    for (let i = seedRange.start; i < seedRange.start + seedRange.length; i++) {
      const result = getLocation(i);
      if (result < minLocation) {
        minLocation = result;
      }
    }
  });
  return minLocation;
}

export { solvePartTwo };
