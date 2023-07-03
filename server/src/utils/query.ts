import { baseURL, romDir, imgDir } from '../server.config'
import os from 'os'

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

export function getIpAddress() {
    const ifaces = os.networkInterfaces()

    for (const dev in ifaces) {
        const iface = ifaces[dev]!

        for (let i = 0; i < iface.length; i++) {
            const { family, address, internal } = iface[i]

            if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
                return address
            }
        }
    }
}
