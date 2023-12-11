import { mapper } from "./mapper";
import { MapKind, Maps } from "./parseMaps";

export type MappingFns = Record<MapKind, (x: number) => number>;

function getMappingFns(maps: Maps): MappingFns {
  return Object.entries(maps).reduce((acc: MappingFns, map) => {
    acc[map[0] as MapKind] = mapper(map[1]);
    return acc;
  }, {} as MappingFns);
}

export { getMappingFns };
