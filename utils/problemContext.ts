let _isPartOne: boolean = true;

function setPartOne() {
  _isPartOne = true;
}
function setPartTwo() {
  _isPartOne = false;
}

function isPartOne() {
  return _isPartOne;
}

function isPartTwo() {
  return !_isPartOne;
}

export { setPartOne, setPartTwo, isPartOne, isPartTwo };
