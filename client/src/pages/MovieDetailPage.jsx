import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import TheatreList from '../features/theatres/TheatreList'

const MovieDetail = () => {
  return (
    <>
       <DashboardLayout title={"Theatres"}><TheatreList/></DashboardLayout>
    </>
  )
}

export default MovieDetail