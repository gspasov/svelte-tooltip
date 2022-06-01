## svelte-tooltip

[![npm version](http://img.shields.io/npm/v/svelte-tooltip.svg)](https://www.npmjs.com/package/svelte-tooltip)
[![npm downloads](https://img.shields.io/npm/dm/svelte-tooltip.svg)](https://www.npmjs.com/package/svelte-tooltip)
![license](https://img.shields.io/npm/l/svelte-tooltip)

A simple Svelte component for displaying tooltips.

## How to install

Add to your **Svelte** or **SvelteKit** project with the following lines:

```
npm install svelte-pdf-simple
```

or

```
yarn add svelte-pdf-simple
```

## How to use

```svelte
<script lang="ts">
  import { Tooltip } from "svelte-tooltip";
</script>


<Tooltip text="my tooltip text">
  <button>Click</button>
</Tooltip>
```