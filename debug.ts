#!/usr/bin/env -S node -r "ts-node/register"

import { Heap } from "./utils/Heap";

const heap = new Heap<number>((a, b) => a - b);

const pushDebug = (...all: number[]) => {
  heap.debug();
  heap.push(...all);
  console.log(heap.toString());
};

const popDebug = () => {
  heap.debug();
  console.log("popped", heap.pop());
  console.log(heap.toString());
};

pushDebug(10, 2, 45, 7, 10, 12, 3);
popDebug();
popDebug();
