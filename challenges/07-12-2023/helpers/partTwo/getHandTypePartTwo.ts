import { Card, HandType } from "../types";

type CardCount = { [key in Card]?: number };

function getCardCountListWithJoker(cardCount: CardCount): number[] {
  const { J: nbJoker = 0, ...rest } = cardCount;
  if (nbJoker === 5) {
    return [5];
  }

  const cardCountWithoutJoker = { ...rest };
  const sortedCardCountList = Object.values(cardCountWithoutJoker).sort(
    (a, b) => b - a
  );
  sortedCardCountList[0] += nbJoker;
  return sortedCardCountList;
}

function getHandTypePartTwo(cards: Card[]): HandType {
  const cardCount = cards.reduce((acc: CardCount, card) => {
    if (acc[card] == null) {
      acc[card] = 0;
    }
    //@ts-ignore
    acc[card]++;
    return acc;
  }, {});

  const sortedCardCountList = getCardCountListWithJoker(cardCount);
  const [highest, secondHighest] = sortedCardCountList;

  if (highest === 5) {
    return "5ofak";
  } else if (highest === 4) {
    return "4ofak";
  } else if (highest === 3 && secondHighest === 2) {
    return "fh";
  } else if (highest === 3) {
    return "3ofak";
  } else if (highest === 2 && secondHighest === 2) {
    return "2p";
  } else if (highest === 2) {
    return "1p";
  }
  return "na";
}

export { getHandTypePartTwo };
