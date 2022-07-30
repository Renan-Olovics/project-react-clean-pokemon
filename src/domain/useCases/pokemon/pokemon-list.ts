import { Pokemon } from '@/domain/models/pokemon'

export interface PokemonList {
  load: () => Promise<PokemonList.Result[]>
}

export namespace PokemonList {
  export type Result = Pokemon[]
}
