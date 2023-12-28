class PrioritizedQueue<T> {
  private list: T[];
  private sorter: (a: T, b: T) => number;
  private mustSort: boolean;

  constructor(sorter: (a: T, b: T) => number = () => 0) {
    this.list = [];
    this.sorter = sorter;
    this.mustSort = false;
  }

  private sortIfNeeded() {
    if (this.mustSort) {
      this.list.sort(this.sorter);
      this.list.reverse();
      this.mustSort = false;
    }
  }

  push(...items: T[]): PrioritizedQueue<T> {
    this.list.push(...items);
    this.mustSort = true;
    return this;
  }

  pop(): T | undefined {
    this.sortIfNeeded();
    return this.list.pop();
  }

  *exhaust(): Generator<T> {
    let item: T | undefined;
    while ((item = this.pop()) != undefined) {
      yield item;
    }
    return;
  }
}

export { PrioritizedQueue };
