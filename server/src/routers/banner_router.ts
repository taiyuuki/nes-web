import { Router as rotuer } from 'express'
import { getBanner } from '../services/banner_service'
import { dispatchResponse } from '../utils/response'

const banner = rotuer()

banner.get('/banner', async (_, res) => {
    await dispatchResponse(async () => {
        const banner = await getBanner()
        res.send({
            code: 200,
            banner,
        })
    }, res)
})

export default banner
