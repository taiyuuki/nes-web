export function getContrastColor(hexcolor: string) {
  const r = parseInt(hexcolor.substring(1, 2), 16)
  const g = parseInt(hexcolor.substring(3, 4), 16)
  const b = parseInt(hexcolor.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 10 ? 'black' : 'white'
}

export function isNotNull<T>(target: T): target is NonNullable<T> {
  return target !== void 0 && target !== null
}

export function isNotEmptyString<T>(s: T): s is Exclude<T, '' | null | undefined> {
  if (typeof s === 'string') {
    return s.trim() !== ''
  }
  return isNotNull(s)
}

export function getKeys<T extends Record<string, string>>(c: T) {
  return Object.keys(c) as UnionToTuple<Exclude<keyof T, 'SELECT' | 'START'>>
}

export function between(v: number, min: number, max: number) {
  return max <= min
    ? min
    : Math.min(max, Math.max(min, v))
}

export function inc(p: number, amount?: number) {
  if (typeof amount !== 'number') {
    if (p < 25) {
      amount = (Math.random() * 3) + 3
    }
    else if (p < 65) {
      amount = Math.random() * 3
    }
    else if (p < 85) {
      amount = Math.random() * 2
    }
    else if (p < 99) {
      amount = 0.6
    }
    else {
      amount = 0
    }
  }
  return between(p + amount, 0, 100)
}

export function stopDefault(e: DragEvent) {
  e.preventDefault()
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
  }
}

export function getNow() {
  function digitComplement(n: number) {
    return String(n).length === 1 ? `0${n}` : String(n)
  }
  const time = new Date(Date.now())
  let result = time.getFullYear() + '年'
  result += (time.getMonth() + 1 + '月')
  result += (time.getDate() + '日 ')
  result += (digitComplement(time.getHours()) + ':')
  result += (digitComplement(time.getMinutes()) + ':')
  result += (digitComplement(time.getSeconds()))
  return result
}

export function imageToBase64(img: HTMLImageElement | undefined) {
  const cvs = document.createElement('canvas')
  cvs.width = 48
  cvs.height = 45
  const ctx = cvs.getContext('2d')
  if (isNotNull(img) && isNotNull(ctx)) {
    ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
  }
  return cvs.toDataURL('image/jpeg')
}

export const setStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = <T>(key: string, empty: T) => {
  const data = localStorage.getItem(key)
  return isNotNull(data) ? JSON.parse(data) : empty
}

export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}