#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseSpringReports } from "./helpers/parseSpringReports";
import { getMatchingCombinations } from "./helpers/getMatchingCombinations";

const reports = parseSpringReports(path.join(__dirname, "test/input.txt"));

console.log(getMatchingCombinations(reports[4]));
