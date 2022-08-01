import { AxiosHttpClient } from '@/infra/http'

export const makeHttpClient = <T>() => new AxiosHttpClient<T>()
