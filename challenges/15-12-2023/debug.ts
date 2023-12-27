#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { hash } from "./helpers/hash";
import { parseInstructions } from "./helpers/parseInstructions";

const instructions = parseInstructions(path.join(__dirname, "test/input.txt"));
console.log(instructions);
