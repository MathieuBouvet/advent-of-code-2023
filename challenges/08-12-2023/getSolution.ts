import { lcm } from "mathjs";
import { isPartOne } from "../../utils/problemContext";
import { NavigationMap } from "./helpers/parseNavigationMap";

function getSolution(navigationMap: NavigationMap) {
  if (isPartOne()) {
    return getSolutionForPartOne(navigationMap);
  } else {
    return getSolutionForpartTwo(navigationMap);
  }
}

function getSolutionForPartOne(navigationMap: NavigationMap): number {
  const { directions, network } = navigationMap;

  let currentNode = "AAA";
  let i = 0;
  while (currentNode !== "ZZZ") {
    const direction = directions[i % directions.length];
    currentNode = network[currentNode][direction === "L" ? "left" : "right"];
    i++;
  }

  return i;
}

function getSolutionForpartTwo(navigationMap: NavigationMap): number {
  const { directions, network } = navigationMap;
  const startingNodes = Object.keys(network).filter(d => d.endsWith("A"));

  const iterationRequired = startingNodes.map(node => {
    let i = 0;
    let currentNode = node;
    while (!currentNode.endsWith("Z")) {
      const direction = directions[i % directions.length];
      currentNode = network[currentNode][direction === "L" ? "left" : "right"];
      i++;
    }
    return i;
  });

  //@ts-ignore
  return lcm(...iterationRequired);
}

export { getSolution };
