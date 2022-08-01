import { API_BASE_URL } from '@/main/constants'

export const makeApiUrl = (url: string) => `${API_BASE_URL}${url}`
