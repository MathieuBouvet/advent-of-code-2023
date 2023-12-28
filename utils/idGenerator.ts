import { range } from "./range";

function idGenerator(prefix?: string) {
  const integers = range(0, Infinity);
  const handlePrefix = (i: number) => {
    if (prefix == null) {
      return [i];
    }
    return [prefix, i];
  };
  return () => {
    return handlePrefix(integers.next().value).join("-");
  };
}

export { idGenerator };
