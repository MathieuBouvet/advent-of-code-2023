import { isPartOne } from "../../../utils/problemContext";

function expandedParts(parts: string): string {
  if (isPartOne()) {
    return parts;
  }
  return [parts, parts, parts, parts, parts].join("?");
}

function expandedGroups(groups: number[]): number[] {
  if (isPartOne()) {
    return groups;
  }
  return [...groups, ...groups, ...groups, ...groups, ...groups];
}

export { expandedParts, expandedGroups };
