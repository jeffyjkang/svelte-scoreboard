<script lang='ts'>
  import {PlayerType, ScoreboardStore} from './Stores';

  let player: PlayerType = {
    name: '',
    points: 0
  }

  const addPlayer: () => void = () => {
    ScoreboardStore.update((currentScoreboard: PlayerType[]) => {
      return [player, ...currentScoreboard];
    });
    player = {
      name: '',
      points: 0
    }
  }
</script>

<form on:submit|preventDefault={addPlayer}>
  <input type='text' placeholder='Player Name' bind:value={player.name} />
  <input type='number' bind:value={player.points} />
  <input type='submit' value='Add Player' />
</form>

