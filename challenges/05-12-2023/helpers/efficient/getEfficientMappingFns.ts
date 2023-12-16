import { mapper } from "./mapperEfficient";
import { MapKind, MapsEfficient } from "./parseMapsEfficient";
import { Range } from "./range";

export type MappingFns = Record<MapKind, (range: Range[]) => Range[]>;

function getEfficientMappingFns(maps: MapsEfficient): MappingFns {
  return Object.entries(maps).reduce((acc: MappingFns, map) => {
    acc[map[0] as MapKind] = mapper(map[1]);
    return acc;
  }, {} as MappingFns);
}

export { getEfficientMappingFns };
