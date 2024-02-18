import express from 'express';
import messageRoutes from './routes/messages.routes.js'

const app = express();
app.use(express.json());

app.use('/api', messageRoutes)

app.listen(3000)
console.log('Server listening on port', 3000)