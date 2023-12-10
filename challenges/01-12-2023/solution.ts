import { readFileSync } from "fs";
import path from "path";
import { getCalibrationNumber } from "./sub/getCalibrationNumber";
import { getAdjustedCalibrationNumber } from "./sub/getAdjustedCalibrationNumber";

function solution01(isPartTwo: boolean) {
  const lines = readFileSync(path.join(__dirname, "input.txt"), "utf-8").split(
    "\n"
  );
  const getCalibration = isPartTwo
    ? getAdjustedCalibrationNumber
    : getCalibrationNumber;
  const calibrationNumber = getCalibration(lines);
  console.log(
    `The${isPartTwo ? " adjusted" : ""} calibration number is :`,
    calibrationNumber
  );
}

export { solution01 };
