import { readFileSync } from "fs";

export type SpringReport = {
  parts: string;
  groupDetails: number[];
};

function parseSpringReports(path: string): SpringReport[] {
  const file = readFileSync(path, "utf-8");

  const lines = file.split("\n");
  return lines.map(line => {
    const [parts, groupDetailsStr] = line.split(" ");
    const groupDetails = groupDetailsStr.split(",").map(s => Number(s));
    return {
      parts,
      groupDetails,
    };
  });
}

export { parseSpringReports };
