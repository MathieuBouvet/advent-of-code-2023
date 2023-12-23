import { Cell, Grid } from "../../../utils/Grid";
import { i } from "../../../utils/expandedIterator";

function getExpansionMap(galaxyMap: Grid<string>) {
  const columns = [...galaxyMap.columns()].reduce(
    (acc: number[], column, i) => {
      if (column.every(cell => cell.value === ".")) {
        acc.push(i);
      }
      return acc;
    },
    []
  );
  const lines = [...galaxyMap.lines()].reduce((acc: number[], line, i) => {
    if (line.every(cell => cell.value === ".")) {
      acc.push(i);
    }
    return acc;
  }, []);

  return {
    columns,
    lines,
  };
}

export { getExpansionMap };
