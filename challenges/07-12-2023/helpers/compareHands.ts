import { Hand } from "./parseHand";
import { cardRanks, typeRanks } from "./types";

function compareHands(a: Hand, b: Hand): number {
  const comparedTypes = typeRanks[a.type] - typeRanks[b.type];
  if (comparedTypes === 0) {
    for (let i = 0; i < 5; i++) {
      const comparedCards = cardRanks[a.cards[i]] - cardRanks[b.cards[i]];
      if (comparedCards !== 0) {
        return comparedCards;
      }
    }
    return 0;
  }
  return comparedTypes;
}

export { compareHands };
