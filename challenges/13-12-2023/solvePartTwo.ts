import { Grid } from "../../utils/Grid";
import { xI } from "../../utils/expandedIterator";
import { sum } from "../../utils/sum";
import { isSmudgelySymetricalAt } from "./helpers/isSmudgelySymetricalAt";

type AxisData = {
  type: "vertical" | "horizontal";
  index: number;
};

function solvePartTwo(patterns: Grid<string>[]): number {
  const axis = patterns.map((pattern): AxisData => {
    const columnsStr: string[] = [
      ...xI(pattern.columns()).map(cells => cells.map(c => c.value).join(""))(),
    ];
    const verticalAxis = columnsStr.findIndex((_, i) =>
      isSmudgelySymetricalAt(columnsStr, i)
    );
    if (verticalAxis !== -1) {
      return {
        type: "vertical",
        index: verticalAxis,
      };
    }
    const linesStr: string[] = [
      ...xI(pattern.lines()).map(cells => cells.map(c => c.value).join(""))(),
    ];
    const horizontalAxis = linesStr.findIndex((_, i) =>
      isSmudgelySymetricalAt(linesStr, i)
    );
    return {
      type: "horizontal",
      index: horizontalAxis,
    };
  });

  const verticalValue = sum(
    axis.filter(a => a.type === "vertical").map(a => a.index + 1)
  );
  const horizontalValue = sum(
    axis.filter(a => a.type === "horizontal").map(a => a.index + 1)
  );

  return 100 * horizontalValue + verticalValue;
}

export { solvePartTwo };
