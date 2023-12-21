import express from 'express'
import userRoutes from './routes/user.routes.js'
import movieRoutes from './routes/movie.routes.js'
import showRoutes from './routes/show.routes.js'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDatabase from './config/dbConfig.js';
config();
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());

app.use(cookieParser());

app.use('/api/movie',movieRoutes)
app.use('/api/user', userRoutes);
app.use('/api/show', showRoutes);

app.all('*', (req, res)=>{
    res.status(404).send("Page not found !!!!");
})



app.listen(5050, async()=>{
    await connectToDatabase();
    console.log(`The server is running on http://localhost:5050`)
})