import { PornHub } from "pornhub.js";
import { Router } from "express";


const pornhubRouter = Router()

pornhubRouter.get('/models', async (req, res) => {

   try{
        const pornhub = new PornHub()
        const models = await pornhub.webMaster.getPornstars()

        res.status(200).json({ models: models })
    } catch (err) {
        res.status(400).json(err)
    }
    
})

export default pornhubRouter