import { RemoteListPokemon } from '@/data/useCases/pokemon'

import { makeHttpClient } from '@/main/factories/infra'
import { makeApiUrl } from '@/main/factories/utils'

export const makeListPokemon = () =>
  new RemoteListPokemon(makeApiUrl('/pokemon'), makeHttpClient<RemoteListPokemon.Response>())
