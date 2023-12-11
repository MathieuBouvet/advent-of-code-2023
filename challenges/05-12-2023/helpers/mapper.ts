import { MapConfig } from "./parseMaps";

function mapper(maps: MapConfig[]) {
  return (input: number) => {
    const matchingMap = maps.find(
      map => input >= map.sourceStart && input < map.sourceStart + map.range
    );

    if (matchingMap == null) {
      return input;
    }

    const diff = input - matchingMap.sourceStart;
    return matchingMap.destinationStart + diff;
  };
}

export { mapper };
