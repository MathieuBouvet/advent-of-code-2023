import { Hand } from "../parseHand";
import { cardRanksPartTwo, typeRanks } from "../types";

function compareHandsPartTwo(a: Hand, b: Hand): number {
  const comparedTypes = typeRanks[a.type] - typeRanks[b.type];
  if (comparedTypes === 0) {
    for (let i = 0; i < 5; i++) {
      const comparedCards =
        cardRanksPartTwo[a.cards[i]] - cardRanksPartTwo[b.cards[i]];
      if (comparedCards !== 0) {
        return comparedCards;
      }
    }
    return 0;
  }
  return comparedTypes;
}

export { compareHandsPartTwo };
