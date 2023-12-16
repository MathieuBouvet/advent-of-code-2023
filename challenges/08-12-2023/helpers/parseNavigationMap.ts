import { readFileSync } from "fs";

export type NetworkNode = {
  left: string;
  right: string;
};

export type Network = Record<string, NetworkNode>;

export type NavigationMap = {
  directions: string[];
  network: Network;
};

function parseNavigationMap(path: string) {
  const file = readFileSync(path, "utf-8");

  const [directionsString, networkMapStr] = file.split("\n\n");
  const netWorkMapLines = networkMapStr.split("\n");
  const network = netWorkMapLines.reduce((acc: Network, lines) => {
    const [_, node, left, right] =
      lines.match(/^(.{3}) = \((.{3}), (.{3})\)$/) ?? [];

    acc[node] = {
      left,
      right,
    };
    return acc;
  }, {});

  return {
    directions: directionsString.split(""),
    network,
  };
}

export { parseNavigationMap };
