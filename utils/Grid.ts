export type Position = { x: number; y: number };
export type Cell<T> = Position & { value: T };

class Grid<T> {
  private elements: T[][];

  constructor(elements: T[][]) {
    this.elements = elements;
  }

  get width(): number {
    const linesLength = this.elements.map(line => line.length);
    return Math.max(...linesLength);
  }
  get height(): number {
    return this.elements.length;
  }

  at({ x, y }: Position): T | undefined {
    return this.elements[y]?.[x];
  }

  *cells(): Generator<Cell<T | undefined>> {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const value = this.at({ x, y });
        yield { x, y, value };
      }
    }
  }

  *lines(): Generator<Cell<T | undefined>[]> {
    for (let y = 0; y < this.elements.length; y++) {
      yield (this.elements[y] ?? []).map((value, x) => ({ x, y, value }));
    }
  }

  *columns(): Generator<Cell<T | undefined>[]> {
    for (let x = 0; x < this.width; x++) {
      const column: Cell<T | undefined>[] = [];
      for (let y = 0; y < this.height; y++) {
        column.push({ x, y, value: this.elements[y]?.[x] });
      }
      yield column;
    }
  }

  set({ x, y }: Position, updator: (currentEl: T | undefined) => T): Grid<T> {
    const value = this.at({ x, y });
    if (this.elements[y] == null) {
      this.elements[y] = [];
    }
    this.elements[y][x] = updator(value);
    return this;
  }

  toString(): string {
    return this.elements.map(lines => lines.join("")).join("\n");
  }
}

export { Grid };
