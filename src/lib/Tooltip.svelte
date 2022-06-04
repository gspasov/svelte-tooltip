<script lang="ts">
  import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
    type Placement,
    type Side,
  } from "@floating-ui/dom";
  import { scale } from "svelte/transition";
  import { placementToSide, placementToOppositeSide } from "./utils";

  export let text = "";
  export let placement: Placement = "top";
  export let maxWidth = 200;
  export let theme: "dark" | "light" = "light";
  export let hoist = false;
  export let arrowOffset = 8;
  export let tooltipMargin = 10;

  let targetElement: HTMLDivElement;
  let tooltipElement: HTMLDivElement;
  let arrowElement: HTMLDivElement;
  let visible = false;
  let tooltipLeft = 0;
  let tooltipTop = 0;
  let arrowLeftPx = "";
  let arrowTopPx = "";
  let arrowPosition = emptySideRecord("");
  let marginLeft = 0;
  let marginRight = 0;

  $: if (tooltipElement && arrowElement) {
    updateTooltipPosition();
  }

  function updateTooltipPosition(): void {
    computePosition(targetElement, tooltipElement, {
      placement,
      middleware: [offset(arrowOffset), flip(), shift(), arrow({ element: arrowElement })],
      strategy: hoist ? "fixed" : "absolute",
    }).then(({ x, y, placement, middlewareData }) => {
      tooltipLeft = x;
      tooltipTop = y;

      marginLeft = placementToSide(placement) === "right" ? 0 : tooltipMargin;
      marginRight = placementToSide(placement) === "left" ? 0 : tooltipMargin;

      let arrowX = middlewareData.arrow?.x;
      let arrowY = middlewareData.arrow?.y;
      arrowLeftPx = arrowX != null ? `${arrowX - marginLeft}px` : "";
      arrowTopPx = arrowY != null ? `${arrowY}px` : "";

      arrowPosition = { ...emptySideRecord(""), [placementToOppositeSide(placement)]: "-4px" };
    });
  }

  function emptySideRecord<T>(empty: T): Record<Side, T> {
    return { top: empty, left: empty, right: empty, bottom: empty };
  }

  function showTooltip(): void {
    visible = true;
  }

  function hideTooltip(): void {
    visible = false;
  }
</script>

<div
  class="target"
  aria-describedby="tooltip"
  on:mouseenter={showTooltip}
  on:focus={showTooltip}
  on:mouseleave={hideTooltip}
  on:blur={hideTooltip}
  bind:this={targetElement}
>
  <slot />
</div>
{#if visible}
  <div
    class="tooltip"
    class:dark={theme === "dark"}
    class:light={theme === "light"}
    role="tooltip"
    style:left="{tooltipLeft}px"
    style:top="{tooltipTop}px"
    style:max-width="{maxWidth}px"
    style:position={hoist ? "fixed" : "absolute"}
    style:margin-left="{marginLeft}px"
    style:margin-right="{marginRight}px"
    bind:this={tooltipElement}
    transition:scale={{ duration: 250 }}
  >
    <slot name="content">{text}</slot>
    <div
      class="arrow"
      class:dark={theme === "dark"}
      class:light={theme === "light"}
      style:top={arrowPosition.top.length > 0 ? arrowPosition.top : arrowTopPx}
      style:left={arrowPosition.left.length > 0 ? arrowPosition.left : arrowLeftPx}
      style:right={arrowPosition.right}
      style:bottom={arrowPosition.bottom}
      bind:this={arrowElement}
    />
  </div>
{/if}

<style>
  :global(html) {
    --tooltip-light-text: #eee;
    --tooltip-light-background: #27272a;
    --tooltip-dark-text: #333;
    --tooltip-dark-background: #ddd;
  }

  .target {
    display: inline-block;
  }

  .tooltip {
    font-size: 0.875rem;
    padding: 5px 10px;
    border-radius: 0.2rem;
    pointer-events: none;
    font-family: sans-serif;
    top: 0px;
    left: 0px;
    z-index: 100;
  }

  .dark {
    background-color: var(--tooltip-dark-background);
    color: var(--tooltip-dark-text);
  }

  .light {
    background-color: var(--tooltip-light-background);
    color: var(--tooltip-light-text);
  }

  .arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }
</style>
