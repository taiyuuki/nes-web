import router from 'src/router'
import { isNotEmptyString } from 'src/utils'

export function pushToGamePlayer(id: string) {
    router.push({
        path: '/gameplayer',
        query: { id },
    })
}

export function searchGames(keyword: string) {
    if (isNotEmptyString(keyword)) {
        router.push({
            path: '/gamelist',
            query: { keyword },
        })
    }
    else {
        router.push('/gamelist')
    }
}
