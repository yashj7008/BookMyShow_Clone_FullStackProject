import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useSelector, useDispatch } from "react-redux"

import { fetchAllTheatreAsync, selectAllTheatres } from './theatreSlice';


const TheatreList = () => {
  const theatreList = useSelector(selectAllTheatres);
  const { movieId } = useParams();
  console.log(movieId);
  const dispatch = useDispatch();


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(fetchAllTheatreAsync({movieId}));
  }, [movieId,dispatch]); // Include movieId in the dependency array

  return (
    <>
      <div>TheatreList</div>
      {
        theatreList.map((theatre) => (
          <div className='flex border border-blue-500 p-4 rounded shadow m-2' >
              <div className='w-1/3'>
              <div className='text-lg'>
                  <span className='font-bold'>{theatre.theatreName}</span> (
                  <span className='text-sm font-regular'>{theatre.theatreLocation}</span>)
              </div>
              <div className='text-sm font-regular'>Theatre Id : {theatre._id}</div>     
          </div>
          <div className='w-2/3 flex gap-2'>
            {
              theatre.shows.map((show)=>(
                <Link to={`/movies/theatres/show/${show._id}`}>
                      <button className='bg-transparent border-blue-500 text-blue-500 py-2 px-1 hover:bg-blue-500 hover:text-white'>{show.time}</button> 
                </Link>
                
              ))
            }
               
          </div>
      </div>

        ))
      }
      
      
    </>
  );
};

export default TheatreList;
