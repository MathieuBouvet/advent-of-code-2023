import path from "path";
import { solvePartOne } from "./solvePartOne";
import { parseRacesRecords } from "./helpers/parseRacesRecords";
import { getSolutionMessage } from "../../utils/getSolutionMessage";
import { parseRaceRecordForPartTwo } from "./helpers/parseRaceRecordForPartTwo";
import { solvePartTwo } from "./solvePartTwo";

function challenge06(isPartTwo: boolean) {
  const inputPath = path.join(__dirname, "input.txt");
  if (isPartTwo) {
    const raceRecord = parseRaceRecordForPartTwo(inputPath);
    const res = solvePartTwo(raceRecord);
    console.log(getSolutionMessage(6, isPartTwo), res);
  } else {
    const raceRecords = parseRacesRecords(inputPath);
    const res = solvePartOne(raceRecords);
    console.log(getSolutionMessage(6, isPartTwo), res);
  }
}

export { challenge06 };
