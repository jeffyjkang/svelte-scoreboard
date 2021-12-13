<script lang='ts'>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  let player: {name: string; points: number} = {
    name: '',
    points: 0
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch('addPlayer', player);
    player = {
      name: '',
      points: 0
    }
  }
</script>

<form on:submit={onSubmit}>
  <input type='text' placeholder='Player Name' bind:value={player.name} />
  <input type='number' bind:value={player.points} />
  <input type='submit' value='Add Player' />
</form>

