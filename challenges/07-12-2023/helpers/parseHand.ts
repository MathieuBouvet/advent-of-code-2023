import { readFileSync } from "fs";
import { Card, HandType } from "./types";
import { getHandType } from "./getHandType";

export type Hand = {
  cards: Card[];
  type: HandType;
  bid: number;
};

function parseHand(path: string): Hand[] {
  const file = readFileSync(path, "utf-8");
  const lines = file.split("\n");

  return lines.map(line => {
    const [handString, bidString] = line.split(" ");
    const bid = Number(bidString);
    const cards = handString.split("") as Card[];
    const type = getHandType(cards);

    return {
      cards,
      type,
      bid,
    };
  });
}

export { parseHand };
