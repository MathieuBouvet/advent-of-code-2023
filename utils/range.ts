function* range(
  start: number,
  end: number,
  step: number = 1
): Generator<number> {
  const absoluteStep = Math.abs(step);
  const stepSign = start > end ? -1 : 1;
  const computedStep = absoluteStep * stepSign;

  const stop = (i: number) => (start <= end ? i > end : i < end);

  let i = start;
  while (true) {
    if (stop(i)) {
      return;
    }
    yield i;
    i += computedStep;
  }
}

export { range };
