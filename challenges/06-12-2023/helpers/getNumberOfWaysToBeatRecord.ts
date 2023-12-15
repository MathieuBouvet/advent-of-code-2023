import { RaceRecord } from "./parseRacesRecords";

function getNumberOfWaysToBeatRecord(raceRecord: RaceRecord): number {
  let nbWays = 0;
  for (let speed = 0; speed < raceRecord.duration; speed++) {
    const remainingTime = raceRecord.duration - speed;
    const distanceTraveled = remainingTime * speed;

    if (distanceTraveled > raceRecord.distance) {
      nbWays++;
    }
  }
  return nbWays;
}

export { getNumberOfWaysToBeatRecord };
