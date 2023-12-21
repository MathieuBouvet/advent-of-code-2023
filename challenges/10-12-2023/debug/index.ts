#!/usr/bin/env -S node -r "ts-node/register"

import path from "path";
import { Tiles } from "../models/Tiles";

function debug() {
  const tiles = new Tiles(path.join(__dirname, "input.debug2.txt"));

  console.log(tiles.getCleanedTiles().toString());
  console.log();
  console.log(tiles.countInsideTiles());
}

debug();
