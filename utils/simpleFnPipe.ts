type SimpleFn<T> = (arg: T) => T;

function simpleFnPipe<T>(...fns: SimpleFn<T>[]): SimpleFn<T> {
  return fns.reduce(
    (acc: SimpleFn<T>, fn) => {
      return x => fn(acc(x));
    },
    x => x
  );
}

export { simpleFnPipe };
