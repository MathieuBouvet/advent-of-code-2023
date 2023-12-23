import { Grid, NonNullableCell } from "../../utils/Grid";
import { isPartOne } from "../../utils/problemContext";
import { sum } from "../../utils/sum";
import { getAllPossiblePairs } from "./helpers/getAllPossiblePairs";
import { getDistances } from "./helpers/getDistances";
import { getExpansionMap } from "./helpers/getExpansionMap";

function solvePartOne(galaxyMap: Grid<string>): number {
  const expansionCoeficient = isPartOne() ? 1 : 999_999;
  const expansionMap = getExpansionMap(galaxyMap);

  const pairs = getAllPossiblePairs(
    [...galaxyMap.cells()].filter(
      (cell): cell is NonNullableCell<string> => cell.value === "#"
    )
  );

  const distances = pairs.map(([p1, p2]) => {
    const distanceWithoutExpansion = getDistances([p1, p2]);
    const columnsExpansion = expansionMap.columns.filter(col => {
      const [x1, x2] = p1.x < p2.x ? [p1.x, p2.x] : [p2.x, p1.x];
      return col > x1 && col < x2;
    }).length;
    const linesExpansion = expansionMap.lines.filter(col => {
      const [y1, y2] = p1.y < p2.y ? [p1.y, p2.y] : [p2.y, p1.y];
      return col > y1 && col < y2;
    }).length;

    const distance =
      distanceWithoutExpansion.x +
      linesExpansion * expansionCoeficient +
      distanceWithoutExpansion.y +
      columnsExpansion * expansionCoeficient;
    return distance;
  });
  return sum(distances);
}

export { solvePartOne };
