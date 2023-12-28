#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseContraptions } from "./helpers/parseContraptions";
import { solvePartOne } from "./solvePartOne";
import { getAllPossibleInitialBeams } from "./helpers/getAllPossibleInitialBeams";

const contraptions = parseContraptions(path.join(__dirname, "test/input.txt"));
console.log(contraptions.toString(el => (el.isEnergized ? "#" : el.type)));
console.log(getAllPossibleInitialBeams(contraptions).length);

const arr = [];

arr[24] = 24;
arr[3] = 3;

console.log(arr, arr.length);
console.log(arr.pop());
