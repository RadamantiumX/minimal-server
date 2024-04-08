import {  Router } from 'express';
import { prisma } from '../db.js'; 

const epikkaRouter = Router()

epikkaRouter.get('/epikka', async (req, res) => {
    try {
        const messages = await prisma.epikka.findMany()
       
        res.json(messages)
    } catch (err) {
        res.status(400).json(err)
    }
})

epikkaRouter.post('/epikka', async (req, res) => {
    try {
        const message = await prisma.epikka.create({
            data: req.body
        })
       res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.json({ message: 'Message saved' })
    } catch (err) {
        res.status(400).json(err)
    }
})

export default epikkaRouter