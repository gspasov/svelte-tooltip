import type { Placement, Side } from "@floating-ui/dom";

export type Theme = "light" | "dark";

export function remToPx(rem: number): number {
  return rem / 0.0625;
}

export function oppositeSide(side: Side): Side {
  switch (side) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "left":
      return "right";
    case "bottom":
      return "top";
    default:
      assertUnreachable(side);
  }
}

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

export function assertUnreachable(value: never): never {
  throw new Error(`Unreachable value reached: ${JSON.stringify(value, null, 2)}`);
}
