class PrioritizedQueueOptimized<T> {
  private list: T[][];
  private priorityGetter: (item: T) => number;
  constructor(priorityGetter: (item: T) => number) {
    this.list = [];
    this.priorityGetter = priorityGetter;
  }

  push(...items: T[]) {
    items.forEach(item => {
      const priority = this.priorityGetter(item);
      if (this.list[priority] == null) {
        this.list[priority] = [];
      }
      this.list[priority].push(item);
    });
    return this;
  }

  pop(): T | undefined {
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      if (item !== undefined) {
        const toReturn = item.pop();
        if (item.length === 0) {
          delete this.list[i];
        }

        return toReturn;
      }
    }
  }

  *exhaust(): Generator<T> {
    let item: T | undefined;
    while ((item = this.pop()) != undefined) {
      yield item;
    }
    return;
  }
}

export { PrioritizedQueueOptimized };
