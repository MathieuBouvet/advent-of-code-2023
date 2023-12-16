export type Range = {
  start: number;
  end: number;
};

function shiftedRange(range: Range, shift: number): Range {
  return {
    start: range.start + shift,
    end: range.end + shift,
  };
}

function splitter(a: Range) {
  return {
    getPartBefore(b: Range): Range | null {
      if (a.start >= b.start) {
        return null;
      }
      return {
        start: a.start,
        end: Math.min(a.end, b.start - 1),
      };
    },
    getPartInside(b: Range): Range | null {
      if (a.end < b.start || a.start > b.end) {
        return null;
      }
      return {
        start: Math.max(a.start, b.start),
        end: Math.min(a.end, b.end),
      };
    },
    getPartAfter(b: Range): Range | null {
      if (a.end <= b.end) {
        return null;
      }
      return {
        start: Math.max(a.start, b.end + 1),
        end: a.end,
      };
    },
  };
}

function splittedAontoB(a: Range, b: Range) {
  const { getPartBefore, getPartAfter, getPartInside } = splitter(a);
  return {
    get partBefore() {
      return getPartBefore(b);
    },
    get partInside() {
      return getPartInside(b);
    },
    get partAfter() {
      return getPartAfter(b);
    },
  };
}

export { shiftedRange, splittedAontoB };
