import { Grid } from "../../utils/Grid";
import { xI } from "../../utils/expandedIterator";
import { sum } from "../../utils/sum";

type Group = {
  baseWeight: number;
  nbRock: number;
  totalWeight: number;
};

function getInitialGroup(baseWeight: number): Group {
  return {
    baseWeight,
    nbRock: 0,
    totalWeight: 0,
  };
}

function solvePartOne(rockMap: Grid<string>): number {
  const columnWeights = xI(rockMap.columns()).map(column => {
    const groupedWeights = column.reduce(
      (acc: Group[], cell, i) => {
        const currentGroup = acc[acc.length - 1];
        if (cell.value === "O") {
          currentGroup.nbRock++;
          currentGroup.totalWeight +=
            currentGroup.baseWeight - (currentGroup.nbRock - 1);
        }
        if (cell.value === "#") {
          acc.push(getInitialGroup(column.length - 1 - i));
        }
        return acc;
      },
      [getInitialGroup(column.length)]
    );
    return sum(groupedWeights.map(g => g.totalWeight));
  });
  return sum([...columnWeights()]);
}

export { solvePartOne };
