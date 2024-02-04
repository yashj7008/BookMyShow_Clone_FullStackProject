import Movie from '../model/movie.model.js' 
import Theatre from '../model/threatre.model.js' 
import  jwt  from 'jsonwebtoken'


const createMovie = async (req, res)=>{
   
    const movieData = req.body;
    try {

        console.log('theatre1 > ', movieData.theatre);
        let theatre = await Theatre.findOne({name: movieData.theatre?.name});
       // console.log('theatre2 > ', theatre);
        if(!theatre) {
            theatre = await Theatre.create(movieData.theatre);
        }
       // console.log('theatre3 > ', theatre);

        const data = await Movie.create({ ...movieData, theatre: theatre._id });
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e);
    }
}

const getMovies = async (req, res)=>{
    const type = req.query.type; // ALL, UPCOMING, LIVE
    const title = req.query.title;
    function escapeRegExp(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // Escaping special characters
      }
    let queryFilter = {};
    if (title) {
        const escapedTitle = escapeRegExp(title);
        queryFilter.title = new RegExp(escapedTitle, 'g');
    }
    switch(type) {
        case 'ALL': {
            break;
        }
        case 'UPCOMING': {
            queryFilter.releaseDate = { $gt: new Date() } ; //UPCOMING
            break;
        }
        case  'LIVE': {
            queryFilter.releaseDate = { $lte: new Date() } ; //LIVE
            break;
        }
        default:
            break;
    }
   
    try {
        const data = await Movie.find(queryFilter).populate('theatre');
       // console.log(queryFilter);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e);
    }
   
}

export {createMovie,getMovies }