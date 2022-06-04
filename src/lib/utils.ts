import type { Placement, Side } from "@floating-ui/dom";

export function placementToSide(placement: Placement): Side {
  switch (placement) {
    case "top":
      return "top";
    case "top-start":
      return "top";
    case "top-end":
      return "top";
    case "right":
      return "right";
    case "right-start":
      return "right";
    case "right-end":
      return "right";
    case "left":
      return "left";
    case "left-start":
      return "left";
    case "left-end":
      return "left";
    case "bottom":
      return "bottom";
    case "bottom-start":
      return "bottom";
    case "bottom-end":
      return "bottom";
    default:
      assertUnreachable(placement);
  }
}

export function placementToOppositeSide(placement: Placement): Side {
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
