import { Pokemon } from '@/domain/models/pokemon'

export interface ListPokemon {
  load: (limit: number) => Promise<ListPokemon.Result>
}

export namespace ListPokemon {
  export type Result = Pokemon[]
}
