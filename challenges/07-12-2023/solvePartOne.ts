import { compareHands } from "./helpers/compareHands";
import { Hand } from "./helpers/parseHand";

function solvePartOne(hands: Hand[]): number {
  const sortedHands = [...hands].sort(compareHands);
  const winnings = sortedHands.map((hand, rank) => hand.bid * (rank + 1));
  return winnings.reduce((acc, winning) => acc + winning);
}

export { solvePartOne };
