<script lang="ts">
  import {ScoreboardStore} from './Stores';
  import Navbar from './Navbar.svelte';
  import Player from './Player.svelte';
  import AddPlayer from './AddPlayer.svelte';
</script>

<main>
  <Navbar/>
  <div>
    <AddPlayer/>
    {#if $ScoreboardStore.length === 0}
      <p>No Players</p>
    {:else}
      {#each $ScoreboardStore as player}
        <Player name={player.name} points={player.points} />
      {/each}
    {/if}
  </div>
</main>

