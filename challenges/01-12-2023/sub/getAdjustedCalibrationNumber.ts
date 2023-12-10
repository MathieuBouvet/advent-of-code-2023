import { parseToNumber } from "./parseToNumber";

function getAdjustedLineCalibration(line: string): number {
  const potentialNumbers: string[] = [];

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const parsed = Number(char);
    if (!isNaN(parsed)) {
      potentialNumbers.push(char);
    } else {
      const parsed = parseToNumber(line.slice(i));
      if (!isNaN(parsed)) {
        potentialNumbers.push(parsed.toString());
      }
    }
  }

  if (potentialNumbers.length === 0) {
    console.warn(`line ${line} does not contain calibration numbers`);
  }

  const first = potentialNumbers[0];
  const last = potentialNumbers.at(-1);

  const parsed = Number(first + last);
  if (isNaN(parsed)) {
    console.warn(`${first + last} cannot be parsed as number`);
  }
  return parsed;
}

function getAdjustedCalibrationNumber(input: string[]): number {
  const calibrationNumbers = input.map(line =>
    getAdjustedLineCalibration(line)
  );
  return calibrationNumbers.reduce((total, calibrationNumber) => {
    return total + calibrationNumber;
  }, 0);
}

export { getAdjustedCalibrationNumber };
