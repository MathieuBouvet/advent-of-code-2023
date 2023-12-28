#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseContraptions } from "./helpers/parseContraptions";
import { solvePartOne } from "./solvePartOne";

const contraptions = parseContraptions(path.join(__dirname, "test/input.txt"));
console.log(contraptions.toString(el => (el.isEnergized ? "#" : el.type)));

solvePartOne(contraptions, 22);
console.log();
console.log(contraptions.toString(el => (el.isEnergized ? "#" : el.type)));
