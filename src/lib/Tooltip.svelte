<script lang="ts">
  import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
    type Placement,
    type Side
  } from "@floating-ui/dom";
  import { tick } from "svelte";
  import { scale } from "svelte/transition";
  import { placementToSide } from "./utils";

  export let text: string = "";
  export let placement: Placement = "top";
  export let maxWidth: number = 200;
  export let theme: "dark" | "light" = "light";

  let targetElement: HTMLDivElement;
  let tooltipElement: HTMLDivElement;
  let arrowElement: HTMLDivElement;
  let visible = false;
  let tooltipLeft = 0;
  let tooltipTop = 0;
  let arrowLeftPx = "";
  let arrowTopPx = "";
  let arrowPosition: Record<Side, string> = emptyPosition();

  function update(): void {
    computePosition(targetElement, tooltipElement, {
      placement,
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowElement, padding: 10 })
      ]
    }).then(({ x, y, placement, middlewareData }) => {
      tooltipLeft = x;
      tooltipTop = y;

      let arrowX = middlewareData.arrow?.x;
      let arrowY = middlewareData.arrow?.y;
      arrowLeftPx = arrowX != null ? `${arrowX}px` : "";
      arrowTopPx = arrowY != null ? `${arrowY}px` : "";

      arrowPosition = emptyPosition();
      arrowPosition[placementToSide(placement)] = "-4px";
    });
  }

  function emptyPosition(): Record<Side, string> {
    return { top: "", left: "", right: "", bottom: "" };
  }

  function showTooltip(): void {
    visible = true;
    tick().then(update);
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
    bind:this={tooltipElement}
    transition:scale={{ duration: 250 }}
  >
    <slot name="content">{text}</slot>
    <div
      class="arrow"
      class:dark={theme === "dark"}
      class:light={theme === "light"}
      style:left={arrowPosition.left.length > 0 ? arrowPosition.left : arrowLeftPx}
      style:top={arrowPosition.top.length > 0 ? arrowPosition.top : arrowTopPx}
      style:right={arrowPosition.right}
      style:bottom={arrowPosition.bottom}
      bind:this={arrowElement}
    />
  </div>
{/if}

<style>
  .target {
    display: inline-block;
  }

  .tooltip {
    position: absolute;

    font-size: 0.875rem;
    padding: 5px 10px;
    border-radius: 0.2rem;
    pointer-events: none;
    font-family: sans-serif;
    top: 0px;
    left: 0px;
  }

  .dark {
    background-color: #ddd;
    color: #333;
  }

  .light {
    background-color: #27272a;
    color: #eee;
  }

  .arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }
</style>
