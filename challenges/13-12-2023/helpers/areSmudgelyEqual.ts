import { areEquals } from "../../../utils/areEquals";

function areSmudgelyEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let diferences = 0;
  for (let i = 0; i < a.length; i++) {
    const s1 = a[i];
    const s2 = b[i];
    if (s1.length !== s2.length) {
      return false;
    }
    for (let j = 0; j < s1.length; j++) {
      if (s1.charAt(j) !== s2.charAt(j)) {
        diferences++;
      }
      if (diferences > 1) {
        return false;
      }
    }
  }
  return diferences === 1;
}

export { areSmudgelyEqual };
