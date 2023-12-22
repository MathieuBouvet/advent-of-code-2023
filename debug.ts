#!/usr/bin/env -S node -r "ts-node/register"

import { Grid } from "./utils/Grid";
import { i } from "./utils/expandedIterator";

const my2dList = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12],
  [13, 14, 15],
];

const myGrid = i(new Grid(my2dList).cells())
  .map(c => c.value)
  .filter(i => i != null)
  .drop(2)
  .take(1)
  .flatMap(i => [i, i]);
console.log(...myGrid());
