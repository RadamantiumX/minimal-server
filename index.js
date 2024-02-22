import express from 'express';
import messageRoutes from './src/routes/messages.routes.js'
import { corsMiddleware } from './src/middlewares/cors.js'



const app = express();
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(corsMiddleware());
app.use("/", (req, res) => {
    res.status(200).send({ message: "Hello There" })
})
app.use('/api', messageRoutes)

app.listen(PORT)
console.log('Server listening on port', PORT)