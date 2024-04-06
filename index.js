import express from 'express';
import messageRoutes from './src/routes/messages.routes.js'
import { corsMiddleware } from './src/middlewares/cors.js'
import bodyParser from 'body-parser'

export default function handler (){
const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(corsMiddleware);

// Muy importante: NO UTILIZAR MEOTODO "use()" EN RUTA RAIZ
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server on" })
})
//////////////////////

app.use('/api', messageRoutes)
 


app.listen(PORT)
console.log(`Server started on http://localhost:${PORT}`)
}



