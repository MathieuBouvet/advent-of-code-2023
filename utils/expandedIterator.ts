type Fn<T, U> = (arg: T) => U;
type ChainableFn = { type: "map" | "filter" | "flatMap"; fn: any };

type Widen<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T;

class ExpandedIterator<T> extends Function {
  private chain: ChainableFn[];
  private iterable: Iterable<T>;
  private _drop = 0;
  private _take = Infinity;

  constructor(iterable: Iterable<T>) {
    super();
    this.chain = [];
    this.iterable = iterable;

    return new Proxy(this, {
      apply: target => target.run(),
    });
  }

  drop(nb: number) {
    this._drop = nb;
    return this;
  }
  take(nb: number) {
    this._take = nb;
    return this;
  }

  map<U>(fn: Fn<T, U>) {
    this.chain.push({ type: "map", fn });
    return this as unknown as ExpandedIterator<U>;
  }
  filter<U extends T>(fn: Fn<T, boolean> | ((arg: T) => arg is U)) {
    this.chain.push({ type: "filter", fn });
    return this as unknown as ExpandedIterator<U>;
  }
  flatMap<U>(fn: Fn<T, U[]>) {
    this.chain.push({ type: "flatMap", fn });
    return this as unknown as ExpandedIterator<U>;
  }

  every(predicate: Fn<T, boolean>): boolean {
    for (let value of this.run()) {
      if (!predicate(value)) {
        return false;
      }
    }
    return true;
  }
  some(predicate: Fn<T, boolean>): boolean {
    for (let value of this.run()) {
      if (predicate(value)) {
        return true;
      }
    }
    return false;
  }
  find<U extends T>(
    finder: Fn<T, boolean> | ((val: T) => val is U)
  ): U | undefined {
    for (let value of this.run()) {
      if (finder(value)) {
        return value as U;
      }
    }
  }
  forEach(fn: Fn<T, void>) {
    for (let value of this.run()) {
      fn(value);
    }
  }
  reduce<U = undefined>(
    reduceFn: (
      previousValue: U extends undefined ? T : Widen<U>,
      currentValue: T
    ) => U extends undefined ? T : Widen<U>,
    initialValue?: U
  ): U extends undefined ? T : Widen<U> {
    const gen = this.run();
    let acc = initialValue ?? gen.next().value;
    for (let value of gen) {
      acc = reduceFn(acc, value);
    }
    return acc;
  }

  *run(): Generator<T> {
    yield* this.runChain(this.iterable, this.chain, this._drop, this._take);
  }

  private *toGenerator<T>(iterable: Iterable<T>): Generator<T> {
    for (let value of iterable) {
      yield value;
    }
  }

  private *runChain<T>(
    iterable: Iterable<T>,
    chain: ChainableFn[],
    drop: number,
    take: number
  ): Generator<T> {
    const gen = this.toGenerator(iterable);
    for (let i = 0; i < drop; i++) {
      gen.next();
    }
    let taken = 0;
    for (let value of gen) {
      if (taken >= take) {
        return;
      }
      let skipYield = false;
      for (let i = 0; i < chain.length; i++) {
        const { type, fn } = chain[i];
        if (type === "map") {
          value = fn(value);
        }
        if (type === "filter" && !fn(value)) {
          skipYield = true;
          break;
        }
        if (type === "flatMap") {
          yield* this.runChain(fn(value), chain.slice(i + 1), 0, Infinity);
          taken++;
          skipYield = true;
          break;
        }
      }
      if (!skipYield) {
        yield value;
        taken++;
      }
    }
  }
}

function xI<T>(iterable: Iterable<T>): ExpandedIterator<T> {
  return new ExpandedIterator(iterable);
}

export { xI };
