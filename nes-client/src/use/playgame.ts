import router from 'src/router'

export function pushToGamePlayer(id: string) {
  router.push({
    path: '/gameplayer',
    query: { id },
  })
}