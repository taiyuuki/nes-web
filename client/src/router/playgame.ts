import router from 'src/router'
import { isNotEmptyString } from 'src/utils'
import pinia from 'src/stores'
import { useCurrentGame } from 'src/stores/current'

const current = useCurrentGame(pinia)

export function pushToGamePlayer(id: string) {
    current.refresh && (current.refresh = false)
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
