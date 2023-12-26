import { Cell } from "../../../utils/Grid";

type RockGroup = {
  start: number;
  end: number;
  rocks: Cell<string | undefined>[];
};

function getInitialGroup(start: number, end: number): RockGroup {
  return {
    start,
    end,
    rocks: [],
  };
}

function getRockGroups(list: Cell<string | undefined>[]): RockGroup[] {
  return list.reduce(
    (acc, cell, i) => {
      const currentGroup = acc[acc.length - 1];
      if (cell.value === "O") {
        currentGroup.rocks.push(cell);
      }
      if (cell.value === "#") {
        currentGroup.end = i;
        acc.push(getInitialGroup(i, list.length));
      }
      return acc;
    },
    [getInitialGroup(-1, list.length)]
  );
}

export { getRockGroups };
