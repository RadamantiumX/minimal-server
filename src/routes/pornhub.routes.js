import { PornHub } from "pornhub.js";
import { Router } from "express";
import { readJSON } from "../../utils.js";

const modelsPage = readJSON("./models.json")
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

pornhubRouter.get('/data', async (req, res)=> {
     const data = await modelsPage

     res.status(200).json(data)
})

export default pornhubRouter