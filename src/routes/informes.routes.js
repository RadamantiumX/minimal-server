import {  Router } from 'express';
import { prisma } from '../db.js'; 

const informesRouter = Router()

informesRouter.post('/informes', async (req, res) => {
    try {
        const informes = await prisma.informes.create({
            data: req.body
        })
       res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.json({ message: 'Datos guardados correctamente' })
    } catch (err) {
        res.status(400).json(err.message)
    }
})

export default informesRouter