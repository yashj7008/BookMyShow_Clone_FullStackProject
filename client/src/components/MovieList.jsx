import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/movie/list?type=ALL');
        const movieList = await response.json();
        setMovies(movieList);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='movieWrapper'>
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
    </div>
  );
  
}
