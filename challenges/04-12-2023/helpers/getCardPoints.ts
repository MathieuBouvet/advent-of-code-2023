function getCardPoints(winNb: number): number {
  if (winNb <= 0) {
    return 0;
  }

  return Math.pow(2, winNb - 1);
}

export { getCardPoints };
