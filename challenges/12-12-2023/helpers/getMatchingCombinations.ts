import { SpringReport } from "./parseSpringReports";
import { xI } from "../../../utils/expandedIterator";
import { range } from "../../../utils/range";
import { areEquals } from "../../../utils/areEquals";

function getMatchingCombinations({
  parts,
  groupDetails,
}: SpringReport): string[] {
  const unknownNb = parts.split("").reduce((acc, char) => {
    if (char === "?") {
      return acc + 1;
    }
    return acc;
  }, 0);

  const matches = xI(range(0, 2 ** unknownNb - 1))
    .map(n => n.toString(2) /* to binary */)
    .map(s => s.padStart(unknownNb, "0"))
    .map(bin => {
      let combinaison = parts;
      bin.split("").forEach(bit => {
        combinaison = combinaison.replace("?", () => (bit === "1" ? "#" : "."));
      });
      return combinaison; // generate parts combinaisons
    })
    .filter(combinaison => {
      const groupCount = combinaison
        .split(".")
        .filter(char => char !== "")
        .map(group => group.length);
      return areEquals(groupCount, groupDetails);
    });

  return [...matches()];
}

export { getMatchingCombinations };
