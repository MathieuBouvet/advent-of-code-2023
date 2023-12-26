#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseRockMap } from "./helpers/parseRockMap";

const rockMap = parseRockMap(path.join(__dirname, "test/input.txt"));

console.log(rockMap.toString());
