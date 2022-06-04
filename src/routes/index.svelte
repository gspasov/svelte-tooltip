<script lang="ts">
  import { Tooltip } from "svelte-tooltip";
</script>

<div class="parent">
  <div>
    <Tooltip text={"Lorem ipsum dolor sit amet"}>
      <button>short</button>
    </Tooltip>
    <Tooltip>
      <button>long with embedded html</button>
      <svelte:fragment slot="content">
        <b>Lorem <i>ipsum dolor sit amet</i>, consectetur adipiscing elit, sed do eiusmod</b>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </svelte:fragment>
    </Tooltip>
  </div>

  <div>
    <Tooltip>
      <button>light</button>
      <svelte:fragment slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </svelte:fragment>
    </Tooltip>
    <Tooltip theme={"dark"}>
      <button>dark</button>
      <svelte:fragment slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </svelte:fragment>
    </Tooltip>
  </div>

  <div class="hoisting">
    <Tooltip>
      <button>no hoist</button>
      <svelte:fragment slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </svelte:fragment>
    </Tooltip>
    <Tooltip hoist={true}>
      <button>hoist</button>
      <svelte:fragment slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </svelte:fragment>
    </Tooltip>
  </div>

  <div>
    <Tooltip maxWidth={300} placement="left">
      <button>max width is too big</button>
      <svelte:fragment slot="content">
        <b>Lorem <i>ipsum dolor sit amet</i>, consectetur adipiscing elit, sed do eiusmod</b>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </svelte:fragment>
    </Tooltip>
  </div>
</div>

<style>
  .hoisting {
    border: solid 2px gray;
    overflow: auto;
    padding: 20px;
    position: relative;
  }

  .parent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 20px;
  }
</style>
