#!/usr/bin/env -S node -r "ts-node/register"

import { solutions } from "./challenges";

const challengeName = process.argv[2];
const isPartTwo = process.argv[3] === "--part-two" || process.argv[3] === "-p2";

const solution = solutions[challengeName];

if (solution == null) {
  console.log(`No solution found for challenge ${challengeName}`);
  process.exit(1);
}

solution(isPartTwo);
