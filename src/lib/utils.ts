import type { Placement, Side } from "@floating-ui/dom";

export function placementToSide(placement: Placement): Side {
  switch (placement) {
    case "top":
      return "bottom";
    case "top-start":
      return "bottom";
    case "top-end":
      return "bottom";
    case "right":
      return "left";
    case "right-start":
      return "left";
    case "right-end":
      return "left";
    case "left":
      return "right";
    case "left-start":
      return "right";
    case "left-end":
      return "right";
    case "bottom":
      return "top";
    case "bottom-start":
      return "top";
    case "bottom-end":
      return "top";
    default:
      assertUnreachable(placement);
  }
}

export function assertUnreachable(value: never): never {
  throw new Error(`Unreachable value reached: ${JSON.stringify(value, null, 2)}`);
}
