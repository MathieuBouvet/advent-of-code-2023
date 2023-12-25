#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { parseSpringReports } from "./helpers/parseSpringReports";
import { countPossibleSolutions } from "./helpers/countPossibleSolutions";

const reports = parseSpringReports(path.join(__dirname, "test/input.txt"));
const report = reports[4];
console.log(report.parts, report.groupDetails);
console.log(countPossibleSolutions(report.parts + ".", report.groupDetails, 0));
