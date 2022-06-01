<script lang="ts">
  import { Tooltip } from "svelte-tooltip";
</script>


<Tooltip placement="right" theme="dark">
  <button>tooltip</button>
  <svelte:fragment slot="content">Nice</svelte:fragment>
</Tooltip>
