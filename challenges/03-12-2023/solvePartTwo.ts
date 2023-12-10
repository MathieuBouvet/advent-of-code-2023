import { getSurroundings } from "./helpers/getSurroundings";
import { isSpecialChar } from "./helpers/isSpecialChar";
import { readLine } from "./helpers/readLine";

type Part = {
  nb: number;
  line: number;
  index: number;
};

function solvePartTwo(lines: string[]) {
  const parts: Part[] = [];
  lines.forEach((line, lineIndex) =>
    readLine(line, (numberTxt, i) => {
      const surroundings = getSurroundings(
        lines,
        lineIndex,
        i,
        numberTxt.length
      );
      if (surroundings.some(char => isSpecialChar(char))) {
        parts.push({ nb: Number(numberTxt), line: lineIndex, index: i });
      }
    })
  );

  const gears: [number, number][] = [];
  lines.forEach((line, lineIndex) => {
    line.split("").forEach((char, i) => {
      if (char === "*") {
        const surroundingParts = parts.filter(part => {
          const lineMatch =
            lineIndex <= part.line + 1 && lineIndex >= part.line - 1;
          const indexMatch =
            i >= part.index - 1 && i <= part.index + part.nb.toString().length;

          return lineMatch && indexMatch;
        });

        if (surroundingParts.length === 2) {
          // @ts-ignore
          gears.push(surroundingParts.map(p => p.nb));
        }
      }
    });
  });

  return gears.reduce((acc, [part1, part2]) => {
    return acc + part1 * part2;
  }, 0);
}

export { solvePartTwo };
