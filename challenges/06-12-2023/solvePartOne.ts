import { getNumberOfWaysToBeatRecord } from "./helpers/getNumberOfWaysToBeatRecord";
import { RaceRecord } from "./helpers/parseRacesRecords";

function solvePartOne(raceRecords: RaceRecord[]) {
  const nbWaysForRaces = raceRecords.map(raceRecord =>
    getNumberOfWaysToBeatRecord(raceRecord)
  );
  return nbWaysForRaces.reduce((acc, nb) => acc * nb);
}

export { solvePartOne };
