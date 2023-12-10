import { getSurroundings } from "./helpers/getSurroundings";
import { isSpecialChar } from "./helpers/isSpecialChar";
import { readLine } from "./helpers/readLine";

function solvePartOne(lines: string[]) {
  const partNumber: number[] = [];
  lines.forEach((line, lineIndex) =>
    readLine(line, (numberTxt, i) => {
      const surroundings = getSurroundings(
        lines,
        lineIndex,
        i,
        numberTxt.length
      );
      if (surroundings.some(char => isSpecialChar(char))) {
        partNumber.push(Number(numberTxt));
      }
    })
  );

  return partNumber.reduce((acc, nb) => {
    return acc + nb;
  }, 0);
}

export { solvePartOne };
