export function getContrastColor(hexcolor: string) {
  const r = parseInt(hexcolor.substring(1, 2), 16)
  const g = parseInt(hexcolor.substring(3, 4), 16)
  const b = parseInt(hexcolor.substring(5, 6), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 8 ? 'black' : 'white'
}

export function stopDefault(e: DragEvent) {
  e.preventDefault()
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
  }
}