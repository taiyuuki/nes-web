import { baseUrl } from '../server.config'

export function checkQuery(query: string | undefined) {
  return query !== void 0 && query.trim() !== ''
}

export function resolveUrl(str: string) {
  return baseUrl + str
}