import { Router as router } from 'express'
import { getAllCategorys } from '../services/categorys_service'
import { dispatchResponse } from '../utils/response'

const categorys = router()

categorys.get('/categorys', async (_, res) => {
    await dispatchResponse(async () => {
        const reslult = await getAllCategorys()
        res.send({
            code: 200,
            categorys: reslult,
        })
    }, res)
})

export default categorys
