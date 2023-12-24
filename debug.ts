#!/usr/bin/env -S node -r "ts-node/register"

import { xI } from "./utils/expandedIterator";
import { range } from "./utils/range";

const testRange = xI(range(0, 9, 2));

console.log(...testRange());
