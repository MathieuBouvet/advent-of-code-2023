import path from "path";
import { parseHeatLossMap } from "../helpers/parseHeatLossMap";
import { solvePartOne } from "../solvePartOne";

test("challenge 17 part one", () => {
  const heatLosses = parseHeatLossMap(path.join(__dirname, "input.txt"));
  const result = solvePartOne(heatLosses);
  expect(result?.totalHeatLoss).toBe(102);
});
