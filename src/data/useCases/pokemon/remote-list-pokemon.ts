import { Pokemon } from '@/domain/models'
import { ListPokemon } from '@/domain/useCases'

import { responseHandler } from '@/data/common/utils'
import { HttpClient } from '@/data/protocols/http'

export class RemoteListPokemon implements ListPokemon {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteListPokemon.Response>
  ) {}

  public async load(limit: number): Promise<RemoteListPokemon.Result> {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: { limit }
    })

    const body = response.body.results.map<Pokemon>((pokemon) => ({
      name: pokemon.name,
      id: pokemon.url.split('/')[6]
    }))

    return responseHandler({ body, status: response.status })
  }
}

export namespace RemoteListPokemon {
  export type Response = {
    count: number
    next: string | null
    previous: string | null
    results: Array<{
      name: string
      url: string
    }>
  }

  export type Result = Pokemon[]
}
