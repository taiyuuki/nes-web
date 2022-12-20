import { baseUrl } from '../server.config'

export function checkQuery(query: string | undefined) {
  return query !== void 0 && query.trim() !== ''
}

export function resolveUrl(str: string) {
  return baseUrl + str
}

export function resolveRomData(rom: RomInfo) {
  rom.url = resolveUrl(rom.url)
  rom.cover = resolveUrl(rom.cover)
  rom.image = resolveUrl(rom.image)
}