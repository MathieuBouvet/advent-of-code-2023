import path from "path";
import { Card } from "./helpers/parseCards";
import { getCardPoints } from "./helpers/getCardPoints";

function solvePartOne(cards: Card[]) {
  const winNbs = cards.map(card => {
    const scratchedWins = card.scratchedNumbers.filter(nb =>
      card.winningNumbers.includes(nb)
    );

    return getCardPoints(scratchedWins.length);
  });

  return winNbs.reduce((acc, nb) => acc + nb, 0);
}

export { solvePartOne };
