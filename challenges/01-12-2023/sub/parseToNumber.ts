const config = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function parser(text: string, toNumber: number) {
  return (str: string) => {
    if (str.startsWith(text)) {
      return toNumber;
    }
    return NaN;
  };
}

const parsers = Object.entries(config).map(([text, toNumber]) =>
  parser(text, toNumber)
);

function parseToNumber(input: string): number {
  for (let parser of parsers) {
    const parsed = parser(input);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return NaN;
}

export { parseToNumber };
