<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let name: string;
  export let points: number;
  let showControls: boolean = false;
  
  const addPoint: () => void = () => points +=1;
  const removePoint: () => void = () => points -=1;
  const toggleControls: () => void = () => showControls = !showControls;
</script>

<div class='card'>
  <h1 class='header'>
    {name}
    <button on:click={toggleControls}>
      {#if showControls}-{:else}+{/if}
    </button>
    <button on:click|preventDefault = {()=>dispatch('deletePlayer', name)}>
      X
    </button>
  </h1>
  <h3 class='header'>Points: {points}</h3>
  {#if showControls}
    <button on:click={addPoint}>+1</button>
    <button on:click={removePoint}>-1</button>
    <input type='number' bind:value={points} />
  {/if}
</div>

<style>
  .card {
    border: 1px dotted gray;
    padding: 16px;
    margin: 16px 0;
  }
  .header {
    color: #204f6e;
  }
</style>

