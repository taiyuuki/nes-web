declare interface RomInfo {
  id: string
  title: string
  cover: string
  image: string
  url: string
  language: string
  source: string
  comment: string
  size: string
  type: string
  category: string
  publisher: string
  location: string
}

declare interface Category {
  id: string
  name: string
}

declare interface Suggestion {
  id: string
  cover: string
  value: string
}

declare interface ObjectCustom {
  keys<T extends any>(obj: T): (keyof T)[]
}

declare type Player = 'p1' | 'p2'

declare interface SaveData {
    id: string
    image: string
    title: string
    date: string
}