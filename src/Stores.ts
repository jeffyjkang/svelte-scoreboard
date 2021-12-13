import {Writable, writable} from 'svelte/store'

export type PlayerType = {
  name: string;
  points: number
}

export const ScoreboardStore: Writable<PlayerType[]> = writable(
  [
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
  ]
)

