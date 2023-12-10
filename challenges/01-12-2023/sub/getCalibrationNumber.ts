function getLineCalibrationNumber(line: string): number {
  const calibrationNumbers = line.split("").filter(char => {
    const parsed = Number(char);
    return !isNaN(parsed);
  });

  if (calibrationNumbers.length === 0) {
    console.warn(`line ${line} does not contain calibration numbers`);
  }

  const first = calibrationNumbers[0];
  const last = calibrationNumbers.at(-1);

  const parsed = Number(first + last);
  if (isNaN(parsed)) {
    console.warn(`${first + last} cannot be parsed as number`);
  }

  return parsed;
}

function getCalibrationNumber(input: string[]): number {
  const calibrationNumbers = input.map(line => getLineCalibrationNumber(line));
  return calibrationNumbers.reduce((total, calibrationNumber) => {
    return total + calibrationNumber;
  }, 0);
}

export { getCalibrationNumber };
