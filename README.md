## svelte-tooltip-simple

[![npm version](http://img.shields.io/npm/v/svelte-tooltip-simple.svg)](https://www.npmjs.com/package/svelte-tooltip-simple)
[![npm downloads](https://img.shields.io/npm/dm/svelte-tooltip-simple.svg)](https://www.npmjs.com/package/svelte-tooltip-simple)
![license](https://img.shields.io/npm/l/svelte-tooltip-simple)

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
  import { Tooltip } from "svelte-tooltip-simple";
</script>


<Tooltip text="my tooltip text">
  <button>Click</button>
</Tooltip>
```