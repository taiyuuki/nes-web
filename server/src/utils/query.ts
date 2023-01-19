import { baseURL, romDir, imgDir } from '../server.config'

export function checkQuery<T>(query: T): query is Exclude<T, null | undefined | ''> {
  if (typeof query === 'string') {
    return query.trim() !== ''
  }
  return query !== void 0 && query !== null
}

export function resolveURL(str: string) {
  return baseURL + str
}

export function resolveRomData(rom: RomInfo) {
  rom.url = resolveURL(romDir + rom.url)
  rom.cover = resolveURL(imgDir + rom.cover)
  rom.image = resolveURL(imgDir + rom.image)
  console.log(rom.url)
}