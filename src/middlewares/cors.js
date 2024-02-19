import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:4321',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://localhost:3005',
    'http://localhost:4000',
    

]

export const corsMiddleware = ({  acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin)){
            return callback(null, true)
        }

        if (!origin) return callback(null, true)

        return callback(new Error('Not allowed by CORS'))
    }
})