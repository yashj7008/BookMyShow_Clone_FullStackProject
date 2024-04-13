import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { queryContext } from "../layouts/DashboardLayout";
import { fetchAllMovieAsync, fetchAllMovieByQueryAsync, selectAllMovie } from "./movieListSlice";
import { useSelector, useDispatch } from 'react-redux';


export default function MovieList() {
  const movies = useSelector(selectAllMovie)
  const isLoading = useSelector((state)=> state.movieList.status)
  
  const { query } = useContext(queryContext);
  //fconsole.log(query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovieAsync());
   query && dispatch(fetchAllMovieByQueryAsync(query));
      
  }, [query, dispatch]);

  return (
    (isLoading === "loading") ? <p>Loading ... </p> :
   (<div className='movieWrapper'>
   {movies.map((movie) => (
     <div className='movie' key={movie.id}>
       <img className="rounded-lg" src={movie.thumbnail} alt={`movie: ${movie.title}`} />
       <div className="mt-4">
         <h6 className="text-lg font-semibold leading-6 text-gray-900"><Link to={`/movies/${movie._id}`}>{movie.title}</Link></h6>
         <p className="text-sm text-gray-500">Rating: {movie.rating}</p>
         <p className="text-sm text-gray-500">Genre: {movie.genre}</p>
         <p className="text-sm text-gray-700 line-clamp-1">{movie.description}</p>
       </div>
     </div>
   ))}
 </div>) 
  );
  
}
