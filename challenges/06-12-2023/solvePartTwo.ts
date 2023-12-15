import { getNumberOfWaysToBeatRecord } from "./helpers/getNumberOfWaysToBeatRecord";
import { RaceRecord } from "./helpers/parseRacesRecords";

function solvePartTwo(raceRecord: RaceRecord): number {
  return getNumberOfWaysToBeatRecord(raceRecord);
}

export { solvePartTwo };
