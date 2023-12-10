function getSolutionMessage(
  challengeNumber: number,
  isPartTwo: boolean
): string {
  return `The solution for challenge n°${challengeNumber} ${
    isPartTwo ? "(part two)" : "(part one)"
  } is:`;
}

export { getSolutionMessage };
