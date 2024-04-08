

const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:4321',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://localhost:4000',
    'http://localhost:5173',
    'https://epikka-new.vercel.app'
   
]

export const corsOptions = {
    origin: function(origin, callback) {
        if(ACCEPTED_ORIGINS.indexOf(origin)){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

