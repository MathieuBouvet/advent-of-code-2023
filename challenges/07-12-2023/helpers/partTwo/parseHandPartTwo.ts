import { readFileSync } from "fs";
import { Card } from "../types";
import { Hand } from "../parseHand";
import { getHandTypePartTwo } from "./getHandTypePartTwo";

function parseHandPartTwo(path: string): Hand[] {
  const file = readFileSync(path, "utf-8");
  const lines = file.split("\n");

  return lines.map(line => {
    const [handString, bidString] = line.split(" ");
    const bid = Number(bidString);
    const cards = handString.split("") as Card[];
    const type = getHandTypePartTwo(cards);

    return {
      cards,
      type,
      bid,
    };
  });
}

export { parseHandPartTwo };
