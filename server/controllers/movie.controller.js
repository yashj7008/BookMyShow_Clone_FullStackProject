import Movie from '../model/movie.model.js'
import  jwt  from 'jsonwebtoken'


const createMovie = async (req, res)=>{
   

    try{
     const movieData = req.body;
     const data = await Movie.create(movieData);
     res.status(200).send(data);

    }
    catch(error){
        res.status(500).send(error);
    }
    
}

const getMovies = async (req, res)=>{
    try {
        const movieData = await Movie.find();
        res.status(200).send(movieData);
    } catch (error) {
        res.status(500).send(error)
    }
   
}

export {createMovie,getMovies }