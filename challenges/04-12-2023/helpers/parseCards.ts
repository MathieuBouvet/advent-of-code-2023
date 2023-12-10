import { readFileSync } from "fs";

export type Card = {
  id: number;
  ownedNb: number;
  winningNumbers: number[];
  scratchedNumbers: number[];
};

function parseCards(path: string): Card[] {
  const lines = readFileSync(path, "utf-8").split("\n");
  return lines.map((line): Card => {
    const [cardName, numberData] = line.split(": ");
    const cardData = cardName.split(" ");
    const rawCardId = cardData.at(-1);
    const [rawWinings, rawScratched] = numberData.split(" | ");

    return {
      id: Number(rawCardId),
      ownedNb: 1,
      winningNumbers: rawWinings
        .split(" ")
        .map(n => Number(n))
        .filter(n => n !== 0),
      scratchedNumbers: rawScratched
        .split(" ")
        .map(n => Number(n))
        .filter(n => n !== 0),
    };
  });
}

export { parseCards };
