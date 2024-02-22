import {  Router } from 'express';
import { prisma } from '../db.js'; 

const router = Router()

router.get('/messages', async (req, res) => {
    try {
        const messages = await prisma.message.findMany()
        console.log(messages);
        // res.json({messages : messages})
    } catch (err) {
        next(err)
    }
})

router.post('/messages', async (req, res) => {
    try {
        const message = await prisma.message.create({
            data: req.body
        })
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.json({ message: 'Message saved' })
    } catch (err) {
        next(err)
    }
})

export default router