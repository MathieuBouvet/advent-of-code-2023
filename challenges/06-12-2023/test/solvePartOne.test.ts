import path from "path";
import { parseRacesRecords } from "../helpers/parseRacesRecords";
import { solvePartOne } from "../solvePartOne";

test("solves challenge 06 part one", () => {
  const raceRecords = parseRacesRecords(
    path.join(__dirname, "input.example.txt")
  );

  const result = solvePartOne(raceRecords);
  expect(result).toBe(288);
});
