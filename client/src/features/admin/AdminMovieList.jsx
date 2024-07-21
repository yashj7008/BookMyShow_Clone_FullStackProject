import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { queryContext } from "../../layouts/DashboardLayout";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {
  fetchAllMovieByQueryAsync,
  selectAllMovie,
} from "../movieList/movieListSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AdminMovieList() {
  const movies = useSelector(selectAllMovie);
  console.log("I am movies", movies);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.movieList.status);
  const { query, type } = useContext(queryContext);
  console.log("type in movie list", type);

  const handleEdit = () => {};

  useEffect(() => {
    dispatch(fetchAllMovieByQueryAsync({ query, type }));
  }, [query, dispatch, type]);

  return isLoading === "loading" ? (
    <p>Loading ... </p>
  ) : (
    <div>
      <div className="flex justify-end my-6">
        <button className="bg-blue-500 px-8 py-2 rounded">Add Movie</button>
      </div>
      <div className="movieWrapper">
      {movies.map((movie) => (
        <>
          <div className="movie">
            <div className="flex justify-end p-2 gap-2">
            <CiEdit size={30} className="cursor-pointer"/>
            <MdDeleteOutline size={30} className="cursor-pointer"/>
            </div>
            <img
              className="rounded-lg"
              src={movie.thumbnail}
              alt={`movie: ${movie.title}`}
            />
            <div className="mt-4">
              <h6 className="text-lg font-semibold leading-6 text-gray-900">
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
              </h6>
              <p className="text-sm text-gray-500">Rating: {movie.rating}</p>
              <p className="text-sm text-gray-500">Genre: {movie.genre}</p>
              <p className="text-sm text-gray-700 line-clamp-1">
                {new Date(movie.releaseDate).toLocaleString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
    </div>

  );
}
