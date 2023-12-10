import { getCalibrationNumber } from "./getCalibrationNumber";

test("with provided example", () => {
  const exampleData = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
  const result = getCalibrationNumber(exampleData);

  expect(result).toBe(142);
});
