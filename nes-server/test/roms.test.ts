import nes from '../nes.json'
import fs from 'fs'
import fglob from 'fast-glob'
import { join } from 'path'
import saveTypes from '../src/data/category.json'

const files = fglob.sync(['**/*'], { cwd: join(__dirname, '../roms') })

interface NesGame {
  id: string
  title: string
  url: string
  images: {
    a: string
    b: string
  }
  language: string
  type: string
  publisher: string
  sourceRom: string
  comment: string
  location: string
  category: string
  romSize: string
}

const games = nes.dat.games.game
const result = [] as NesGame[]
const temp = {} as { [k: string]: number }
const publisher = {} as { [k: string]: boolean }
const local = {} as { [k: string]: boolean }
const sourceRom = {} as { [k: string]: boolean }

games.forEach((game, i) => {
  if (Number(game.romSize) <= 1048592) {
    publisher[game.publisher] = true
    local[game.location] = true
    sourceRom[game.sourceRom] = true
    temp[game.title] = i
  }
})

files.forEach(file => {
  if (temp[file] !== void 0) {
    const game = games[temp[file]]
    const category = saveTypes[game.saveType as keyof typeof saveTypes]
    result.push({
      id: game.imageNumber,
      title: game.title,
      url: '/roms/' + game.title,
      images: {
        a: '/roms/img/' + game.imageNumber + 'a.png',
        b: '/roms/img/' + game.imageNumber + 'b.png',
      },
      language: game.language,
      type: game.saveType,
      publisher: game.publisher,
      sourceRom: game.sourceRom,
      comment: game.comment,
      location: game.location,
      romSize: game.romSize,
      category,
    })
  }
})

fs.writeFile('games.json', JSON.stringify(result.sort((a, b) => a.title.localeCompare(b.title, 'zh'))), 'utf-8', err => console.log(err))
fs.writeFile('location.json', JSON.stringify(local), 'utf-8', err => console.log(err))
fs.writeFile('publisher.json', JSON.stringify(publisher), 'utf-8', err => console.log(err))
fs.writeFile('source.json', JSON.stringify(sourceRom), 'utf-8', err => console.log(err))