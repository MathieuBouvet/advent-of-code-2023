import { getEfficientMappingFns } from "./helpers/efficient/getEfficientMappingFns";
import { MapsEfficient } from "./helpers/efficient/parseMapsEfficient";
import { Range } from "./helpers/efficient/range";
import { SeedRange } from "./helpers/parseSeedRanges";
import { simpleFnPipe } from "../../utils/simpleFnPipe";
import { pipe } from "../../utils/pipe";

function solvePartTwo(maps: MapsEfficient, seedRanges: SeedRange[]): number {
  const {
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation,
  } = getEfficientMappingFns(maps);

  const getLocation = pipe(
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation
  );

  const seedRangesEfficient: Range[] = seedRanges.map(s => ({
    start: s.start,
    end: s.start + s.length - 1,
  }));

  const minLocation = getLocation(seedRangesEfficient).reduce((acc, l) => {
    if (l.start < acc) {
      return l.start;
    }
    return acc;
  }, Infinity);

  return minLocation;
}

export { solvePartTwo };
