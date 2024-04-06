import {  Router } from 'express';
import { prisma } from '../db.js'; 

const router = Router()

router.get('/messages', async (req, res) => {

    try {
        res.status(200).send({ message: "Hello There" })
        const messages = await prisma.form.findMany()
       
        res.json(messages)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/messages', async (req, res) => {
    try {
        const message = await prisma.form.create({
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

export default router