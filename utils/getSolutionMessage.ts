import { isPartTwo as ctx } from "./problemContext";

function getSolutionMessage(
  challengeNumber: number,
  isPartTwo?: boolean
): string {
  return `The solution for challenge n°${challengeNumber} ${
    isPartTwo ?? ctx() ? "(part two)" : "(part one)"
  } is:`;
}

export { getSolutionMessage };
