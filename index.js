import express, {json} from 'express';
import messageRouter from './src/routes/messages.routes.js'
import epikkaRouter from './src/routes/epikka.routes.js'
import cors from 'cors'
import { corsOptions } from './src/middlewares/cors.js';
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors(corsOptions))


// Muy importante: NO UTILIZAR MEOTODO "use()" EN RUTA RAIZ
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server on" })
})
//////////////////////

app.use('/api', messageRouter)
app.use('/api', epikkaRouter)
 
app.listen(PORT)
console.log(`Server started on http://localhost:${PORT}`)





