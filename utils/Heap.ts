function leftChildIndex(i: number): number {
  return i * 2 + 1;
}

function rightChildIndex(i: number): number {
  return i * 2 + 2;
}

function parentIndex(i: number): number {
  return Math.floor((i + 1) / 2) - 1;
}

const TOP = 0;

class Heap<T> {
  private comparator: (a: T, b: T) => number;
  private list: T[];

  constructor(comparator: (a: T, b: T) => number) {
    this.list = [];
    this.comparator = comparator;
  }

  private isOrdered(parentIndex: number, childIndex: number): boolean {
    const parent = this.list[parentIndex];
    const child = this.list[childIndex];
    return this.comparator(parent, child) <= 0;
  }

  private get bottom() {
    return this.size - 1;
  }

  private swap(i: number, j: number) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }

  private shiftUp() {
    let nodeIndex = this.bottom;
    while (
      nodeIndex > TOP &&
      !this.isOrdered(parentIndex(nodeIndex), nodeIndex)
    ) {
      this.swap(parentIndex(nodeIndex), nodeIndex);
      nodeIndex = parentIndex(nodeIndex);
    }
  }

  private shiftDown() {
    let nodeIndex = TOP;
    let childIndex;
    while ((childIndex = this.childToSwap(nodeIndex)) !== null) {
      this.swap(childIndex, nodeIndex);
      nodeIndex = childIndex;
    }
  }

  private childToSwap(parentIndex: number): number | null {
    const child = this.minChild(parentIndex);
    if (child === null) {
      return null;
    }
    return !this.isOrdered(parentIndex, child) ? child : null;
  }

  private minChild(parentIndex: number): number | null {
    const left = leftChildIndex(parentIndex);
    const right = rightChildIndex(parentIndex);
    if (left > this.bottom && right > this.bottom) {
      return null;
    }
    if (left > this.bottom) {
      return right;
    }
    if (right > this.bottom) {
      return left;
    }
    return this.isOrdered(left, right) ? left : right;
  }

  get size(): number {
    return this.list.length;
  }

  peak(): T | undefined {
    return this.list[TOP];
  }

  push(...items: T[]) {
    items.forEach(item => {
      this.list.push(item);
      this.shiftUp();
    });
    return this;
  }

  pop(): T | undefined {
    const poppedValue = this.peak();
    if (poppedValue === undefined) {
      return;
    }
    this.swap(TOP, this.bottom);
    this.list.pop();
    this.shiftDown();
    return poppedValue;
  }

  toString() {
    let start = 0;
    let i = 0;
    let slice = this.list;
    let arr: string[] = [];
    while (slice.length > 0) {
      const size = 2 ** i;
      const end = start + size;
      slice = this.list.slice(start, end);
      arr.push(slice.join("|"));
      i++;
      start = end;
    }
    return arr.join("\n");
  }

  debug() {
    console.log(this.list);
  }

  *exhaust(): Generator<T> {
    let item: T | undefined;
    while ((item = this.pop()) != undefined) {
      yield item;
    }
  }
}

export { Heap };
