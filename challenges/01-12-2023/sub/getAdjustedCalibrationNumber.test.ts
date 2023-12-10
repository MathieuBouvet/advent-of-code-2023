import { getAdjustedCalibrationNumber } from "./getAdjustedCalibrationNumber";

test("with provided example", () => {
  const exampleData = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ];
  const result = getAdjustedCalibrationNumber(exampleData);

  expect(result).toBe(281);
});
