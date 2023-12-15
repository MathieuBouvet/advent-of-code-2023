import { Hand } from "./helpers/parseHand";
import { compareHandsPartTwo } from "./helpers/partTwo/compareHandsPartTwo";

function solvePartTwo(hands: Hand[]) {
  const sortedHands = [...hands].sort(compareHandsPartTwo);
  const winnings = sortedHands.map((hand, rank) => hand.bid * (rank + 1));
  return winnings.reduce((acc, winning) => acc + winning);
}

export { solvePartTwo };
