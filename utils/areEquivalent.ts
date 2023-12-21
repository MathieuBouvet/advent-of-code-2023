function areEquivalent(list1: any[], list2: any[]): boolean {
  if (list1.length !== list2.length) {
    return false;
  }
  const list1InList2 = list1.every(i => list2.includes(i));
  const list2InList1 = list2.every(i => list1.includes(i));

  return list1InList2 && list2InList1;
}

export { areEquivalent };
