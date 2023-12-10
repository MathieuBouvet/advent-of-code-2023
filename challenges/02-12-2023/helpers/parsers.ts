import { Cube, CubeHandfull, Game } from "../types";

function parseGame(line: string): Game {
  const [rawGameMetadata, rawGameDrawsPart] = line.split(": ");
  const [_, rawGameId] = rawGameMetadata.split(" ");
  const gameId = Number(rawGameId);

  if (isNaN(gameId)) {
    console.error(`cannot parse gameId, received ${rawGameId}`);
  }

  const rawGameDraws = rawGameDrawsPart.split("; ");
  const gameDraws = rawGameDraws.map(raw => {
    const cubeHandfull: CubeHandfull = {
      red: 0,
      green: 0,
      blue: 0,
    };
    raw.split(", ").forEach(raw => {
      const [nb, cube] = raw.split(" ");
      cubeHandfull[cube as Cube] = Number(nb);
    });
    return cubeHandfull;
  });

  return {
    id: gameId,
    cubeDraws: gameDraws,
  };
}

export { parseGame };
