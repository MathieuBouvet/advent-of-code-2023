import path from "path";
import { parseRaceRecordForPartTwo } from "../helpers/parseRaceRecordForPartTwo";
import { solvePartTwo } from "../solvePartTwo";

test("solve challenge 06 part two", () => {
  const raceRecord = parseRaceRecordForPartTwo(
    path.join(__dirname, "input.example.txt")
  );
  const res = solvePartTwo(raceRecord);
  expect(res).toBe(71503);
});
