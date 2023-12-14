import express from 'express'
import userRoutes from './routes/user.routes.js'
import movieRoutes from './routes/movie.routes.js'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDatabase from './config/dbConfig.js';
config();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/movie',movieRoutes)
app.use('/api/user', userRoutes);

app.all('*', (req, res)=>{
    res.status(404).send("Page not found !!!!");
})



app.listen(5050, async()=>{
    await connectToDatabase();
    console.log(`The server is running on http://localhost:5050`)
})