function readLine(
  line: string,
  onNumberFound: (numberText: string, index: number) => void
) {
  let numberText = "";
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const isCharNumber = /[0-9]/.test(char);
    const isLastChar = i === line.length - 1;

    if (isCharNumber) {
      numberText += char;
    }
    if ((!isCharNumber || isLastChar) && numberText != "") {
      // number identified
      onNumberFound(numberText, i - numberText.length);
      numberText = "";
    }
  }
}

export { readLine };
