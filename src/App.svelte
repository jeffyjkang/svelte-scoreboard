<script lang="ts">
  import Navbar from './Navbar.svelte';
  import Player from './Player.svelte';
  import AddPlayer from './AddPlayer.svelte';

  let players: {name: string; points: number}[] = [
    {
      name: 'John Doe',
      points: 53
    },
    {
      name: 'Jane Smith',
      points: 67
    },
    {
      name: 'Sam Johnson',
      points: 20
    },
    {
      name: 'Sarah Pike',
      points: 100
    }
  ];

  const addPlayer: (e: any) => void = (e) => {
    const newPlayer: {name: string; points: number} = e.detail;
    players = [newPlayer, ...players];
  }
  const deletePlayer: (e: any) => void = (e) => {
    players = players.filter(player => player.name !== e.detail);
  }
</script>

<main>
  <Navbar />
  <div>
    <AddPlayer on:addPlayer={addPlayer}/>
    {#if players.length === 0}
      <p>No Players</p>
    {:else}
      {#each players as player}
        <Player name={player.name} points={player.points} on:deletePlayer={deletePlayer} />
      {/each}
    {/if}
  </div>
</main>

