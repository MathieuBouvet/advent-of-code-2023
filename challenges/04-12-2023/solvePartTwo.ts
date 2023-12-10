import { Card } from "./helpers/parseCards";

function solvePartTwo(receivedCards: Card[]) {
  const cards = [...receivedCards];

  cards.forEach(card => {
    const nbOfWins = card.scratchedNumbers.filter(nb =>
      card.winningNumbers.includes(nb)
    ).length;

    for (let i = 0; i < nbOfWins; i++) {
      const nextCard = cards[card.id + i];
      if (nextCard != null) {
        nextCard.ownedNb += card.ownedNb;
      }
    }
  });

  return cards.reduce((acc, card) => acc + card.ownedNb, 0);
}

export { solvePartTwo };
