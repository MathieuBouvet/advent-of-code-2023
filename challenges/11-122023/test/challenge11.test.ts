import path from "path";
import { parseGalaxyMap } from "../helpers/parseGalaxyMap";
import { solvePartOne } from "../solvePartOne";

test("challenge one part 1", () => {
  const galaxyMap = parseGalaxyMap(path.join(__dirname, "input.txt"));
  const res = solvePartOne(galaxyMap);
  expect(res).toBe(374);
});
