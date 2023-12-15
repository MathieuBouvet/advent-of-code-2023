export type Card =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "T"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

export type HandType = "5ofak" | "4ofak" | "fh" | "3ofak" | "2p" | "1p" | "na";

export const typeRanks: Record<HandType, number> = {
  "5ofak": 7,
  "4ofak": 6,
  fh: 5,
  "3ofak": 4,
  "2p": 3,
  "1p": 2,
  na: 1,
};

export const cardRanks: Record<Card, number> = {
  A: 13,
  K: 12,
  Q: 11,
  J: 10,
  T: 9,
  "9": 8,
  "8": 7,
  "7": 6,
  "6": 5,
  "5": 4,
  "4": 3,
  "3": 2,
  "2": 1,
};

export const cardRanksPartTwo: Record<Card, number> = {
  A: 13,
  K: 12,
  Q: 11,
  J: 0,
  T: 9,
  "9": 8,
  "8": 7,
  "7": 6,
  "6": 5,
  "5": 4,
  "4": 3,
  "3": 2,
  "2": 1,
};
