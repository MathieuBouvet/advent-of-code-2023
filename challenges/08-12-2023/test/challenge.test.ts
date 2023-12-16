import path from "path";
import { setPartOne, setPartTwo } from "../../../utils/problemContext";
import { getSolution } from "../getSolution";
import { parseNavigationMap } from "../helpers/parseNavigationMap";

test.each([
  {
    file: "input.example1.txt",
    expected: 2,
  },
  {
    file: "input.example2.txt",
    expected: 6,
  },
])("challenge 08 part one ($file)", ({ file, expected }) => {
  setPartOne();
  const navigationMap = parseNavigationMap(path.join(__dirname, file));
  const result = getSolution(navigationMap);

  expect(result).toBe(expected);
});

test("challenge 08 part two", () => {
  setPartTwo();
  const navigationMap = parseNavigationMap(
    path.join(__dirname, "input.example3.txt")
  );
  const result = getSolution(navigationMap);
  expect(result).toBe(6);
});
