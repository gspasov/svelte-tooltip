## svelte-tooltip-simple

[![npm version](http://img.shields.io/npm/v/svelte-tooltip-simple.svg)](https://www.npmjs.com/package/svelte-tooltip-simple)
[![npm downloads](https://img.shields.io/npm/dm/svelte-tooltip-simple.svg)](https://www.npmjs.com/package/svelte-tooltip-simple)
![license](https://img.shields.io/npm/l/svelte-tooltip-simple)

A simple Svelte component for displaying dynamic tooltips. Automatically decides where to place your tooltip based on your preferences.

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

For adding `HTML` to you tooltip you could do the following

```svelte
<script lang="ts">
  import { Tooltip } from "svelte-tooltip-simple";
</script>

<Tooltip>
  <button>Click</button>
  <svelte:fragment slot="content">
    <b>Bold</b> text with <i>italic</i> feel
  </svelte:fragment>
</Tooltip>
```

**NOTE** If you setup the tooltip text with both through `property` and `slot`, the text in the `slot` will be displayed.

## Build

If you are using `svelte-kit` you shouldn't have any issues after installing the package.

With a simple `svelte` project though, you'll need to add the following to the `plugin` list inside `rollup.config.js` file.

```js
replace({
  "process.env.NODE_ENV": process.env.ROLLUP_WATCH ? "development" : "production",
});
```

_The `replace` function comes from the `@rollup/plugin-replace` package._

## Props

| Prop name          | Description                                                                                                                       | Type                   | Default value                                                                           | Required |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------- | -------- |
| text               | Tooltip text                                                                                                                      | string                 | ""                                                                                      | No       |
| placement          | Where to place the tooltip relative to the target                                                                                 | `Placement`            | "top"                                                                                   | No       |
| theme              | Which theme to use                                                                                                                | `Theme`                | "light"                                                                                 | No       |
| hoist              | Whether the tooltip should overflow parent                                                                                        | boolean                | false                                                                                   | No       |
| arrowOffset        | How much offset should the tooltip have from the target                                                                           | number                 | 8                                                                                       | No       |
| padding            | Padding of the text                                                                                                               | `Record<Side, number>` | `{top: 0.3, bottom: 0.3, left: 0.75, right: 0.75 }` _rem_                               | No       |
| borderRadius       | Radius of the tooltip                                                                                                             | number                 | 0.2 _rem_                                                                               | No       |
| fontSize           | Size of the text                                                                                                                  | 0.875 _rem_            | No                                                                                      |
| fallbackPlacements | List of possible fallback places in case the tooltip is not visible in the given position. **NOTE** This does not work perfectly. | `Placement[]`          | Opposite side of the currently selected one _by default the tooltip placement is 'top'_ | No       |

**Placement**: `top` | `left` | `right` | `bottom` | `top-start` | `top-end` | `left-start` | `left-end` | `right-start` | `right-end` | `bottom-start` | `bottom-end`

**Side**: `top` | `left` | `right` | `bottom`

**Theme**: `light` | `dark`

## License

**MIT**
