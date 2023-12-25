#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parsePatterns } from "./helpers/parsePatterns";
import { xI } from "../../utils/expandedIterator";
import { solvePartOne } from "./solvePartOne";

const grids = parsePatterns(path.join(__dirname, "test/input.txt"));
const res = solvePartOne(grids);

console.log(res);
