import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { queryContext } from "../layouts/DashboardLayout";


export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] =useState(null);
  
  const { query } = useContext(queryContext);
  //fconsole.log(query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(query){
          setIsLoading(true);
          const response = await fetch(`http://localhost:5050/api/movie/list?title=${query}`);
          const movieList = await response.json();
          setMovies(movieList);
          setIsLoading(false);

        }
        else{
          setIsLoading(true);
          const response = await fetch('http://localhost:5050/api/movie/list?type=ALL');
          const movieList = await response.json();
          setMovies(movieList);
          setIsLoading(false);
          
        }
        
      } catch (error) {
        setError("Error fetching movie list");
        console.error("Error fetching movie list:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    (isLoading) ? <p>Loading ... </p> :
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
