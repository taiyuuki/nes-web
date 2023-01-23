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

declare type Player = 'p1' | 'p2'

declare interface SaveData {
    id: string
    image: string
    title: string
    date: string
}

type UnionToCross<T> = (T extends T ? (s: () => T) => void : never) extends (
  s: infer R
) => void
  ? R
  : never

type GetCrossLast<T> = T extends () => infer R ? R : never

declare type UnionToTuple<T, Result extends Array<any> = []> = [T] extends [never]
  ? Result
  : [
      ...UnionToTuple<Exclude<T, GetCrossLast<UnionToCross<T>>>>,
      GetCrossLast<UnionToCross<T>>,
    ]
