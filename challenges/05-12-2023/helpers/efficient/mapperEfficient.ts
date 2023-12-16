import { MapConfigEfficient } from "./parseMapsEfficient";
import { Range, shiftedRange, splittedAontoB } from "./range";

type RangeComputingData = { remainingRange: Range | null; result: Range[] };

function mapper(maps: MapConfigEfficient[]) {
  return (inputs: Range[]): Range[] => {
    return inputs.flatMap(input => {
      const { result, remainingRange } = maps.reduce(
        (acc: RangeComputingData, map) => {
          if (acc.remainingRange == null) {
            return acc;
          }
          const { partBefore, partInside, partAfter } = splittedAontoB(
            acc.remainingRange,
            map
          );
          if (partBefore != null) {
            acc.result.push(partBefore);
          }
          if (partInside != null) {
            acc.result.push(shiftedRange(partInside, map.shift));
          }
          acc.remainingRange = partAfter;
          return acc;
        },
        { result: [], remainingRange: input }
      );
      if (remainingRange != null) {
        result.push(remainingRange);
      }
      return result;
    });
  };
}

export { mapper };
