import {Router} from 'express'
import {createMovie,getMovies,getSingleMovie} from '../controllers/movie.controller.js'
import isLoggedIn from '../middlewares/authentication.js';
import authorizedRoles from '../middlewares/authorization.js';

const router = Router();

router.post('/', isLoggedIn,authorizedRoles('Admin'), createMovie);
router.get('/list',getMovies);
router.get('/:movieId', getSingleMovie)

export default router; 