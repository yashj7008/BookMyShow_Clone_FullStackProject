import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleMovie, fetchMovieByIdAsync } from "./movieListSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const movie = useSelector(selectSingleMovie);
  const movieId = useParams();
  console.log(movie);
  const dispatch = useDispatch();
   



  useEffect(() => {
    dispatch(fetchMovieByIdAsync(movieId));
  }, [movieId, dispatch]);
  
  return (
    <div className=" text-white min-h-screen">
      <div
        className="bg-repeat bg-contain bg-center h-96 w-full"
        style={{
          backgroundImage: `url(${movie.bannerImage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 flex justify-start items-center movies-center h-full">
          <div className="ml-8">
            <img className="rounded-lg" src={movie.thumbnail} alt="thumbail" />
          </div>
          <div className="container flex flex-col justify-around mx-auto px-6 py-4 space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <div className="flex">
              <p className="text-xl mr-4">
                {movie.genre} -{" "}
                {new Date(movie.releaseDate).toLocaleString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })} - {"  "}
                {movie.duration} - {"  "}
                { movie.languages?.map((lan)=><span className="mr-2">{lan}</span>)} 
              </p>
              </div>
           
            </div>
            <Link to={`/movies/theatres/${movie._id}`} >
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 text-2xl cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 md:max-w-xs">
              Book Ticket
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="text-black my-8">
      <h1 className="text-3xl font-bold">About the Movie</h1>
        <p className="text-xl py-2">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
