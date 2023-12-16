// imbitable mais ça marche ¯\_(ツ)_/¯

type AnyFunc = (...arg: any) => any;

type LastFnReturnType<F extends Array<AnyFunc>, Else = never> = F extends [
  ...any[],
  (...arg: any) => infer R
]
  ? R
  : Else;

type PipeArgs<F extends AnyFunc[], Acc extends AnyFunc[] = []> = F extends [
  (...args: infer A) => infer B
]
  ? [...Acc, (...args: A) => B]
  : F extends [(...args: infer A) => any, ...infer Tail]
  ? Tail extends [(arg: infer B) => any, ...any[]]
    ? PipeArgs<Tail, [...Acc, (...args: A) => B]>
    : Acc
  : Acc;

function pipe<F extends AnyFunc[]>(
  ...fns: PipeArgs<F> extends F ? F : PipeArgs<F>
): (
  ...args: Parameters<F extends [] ? () => void : F[0]>
) => LastFnReturnType<F, ReturnType<F extends [] ? () => void : F[0]>> {
  const [firstFn, ...rest] = fns;
  return rest.reduce(
    (acc, fn) =>
      (...args) => {
        return fn(acc(...args));
      },
    (...args) => firstFn?.(...args)
  );
}

export { pipe };
