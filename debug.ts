#!/usr/bin/env -S node -r "ts-node/register"

import { PrioritizedQueue } from "./utils/PrioritizedQueue";

const queue = new PrioritizedQueue<number>((a, b) => a - b);

queue.push(45, 23, 9, 5, 6, 1, 25, 789, 45, 1, 369, 5, 4, 12, 0, 450);

for (let item of queue.exhaust()) {
  console.log(item);
}
