import { solvePartOne } from "./solvePartOne";

function solvePartTwo(reports: number[][]): number {
  const reversedReports = reports.map(r => {
    return [...r.reverse()];
  });
  return solvePartOne(reversedReports);
}

export { solvePartTwo };
