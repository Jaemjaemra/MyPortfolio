
export type Tile = {
  id: number;
  row: number;
  col: number;
  x: number;
  y: number;
  width: number;
  height: number;
  backgroundPosition: string;
};

export const rng = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export function makeTiles(
  columns = 6,
  rows = 6
): Tile[] {
  const tiles: Tile[] = [];

  const tileWidth = 100 / columns;
  const tileHeight = 100 / rows;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const id = row * columns + col;

      tiles.push({
        id,
        row,
        col,
        x: col * tileWidth,
        y: row * tileHeight,
        width: tileWidth,
        height: tileHeight,
        backgroundPosition: `${col * 100 / (columns - 1)}% ${
          row * 100 / (rows - 1)
        }%`,
      });
    }
  }

  return tiles;
}

export class JoinerEngine {
  private tiles: Tile[];

  constructor(columns = 6, rows = 6) {
    this.tiles = makeTiles(columns, rows);
  }

  getTiles(): Tile[] {
    return this.tiles;
  }

  shuffle(): Tile[] {
    this.tiles = [...this.tiles]
      .map((tile) => ({
        ...tile,
        x: tile.x + rng(-12, 12),
        y: tile.y + rng(-12, 12),
      }))
      .sort(() => Math.random() - 0.5);

    return this.tiles;
  }

  reset(): Tile[] {
    this.tiles = makeTiles();
    return this.tiles;
  }
}
