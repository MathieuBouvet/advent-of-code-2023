import { Contraption } from "./Contraption";
import { EmptySpace } from "./EmptySpace";
import { HorizontalSplitter } from "./HorizontalSplitter";
import { LeftMirror } from "./LeftMirror";
import { RightMirror } from "./RightMirror";
import { VerticalSplitter } from "./VerticalSplitter";

function createContraption(type: string): Contraption {
  switch (type) {
    case "|":
      return new VerticalSplitter();
    case "-":
      return new HorizontalSplitter();
    case "/":
      return new RightMirror();
    case "\\":
      return new LeftMirror();
    default:
      return new EmptySpace();
  }
}

export { createContraption };
