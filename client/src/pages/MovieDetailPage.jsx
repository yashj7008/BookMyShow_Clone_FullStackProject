import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import MovieDetail   from '../features/movieList/MovieDetail'

const MovieDetailPage = () => {
  return (
    <>
       <DashboardLayout title={"Theatres"}><MovieDetail/></DashboardLayout>
    </>
  )
}

export default MovieDetailPage