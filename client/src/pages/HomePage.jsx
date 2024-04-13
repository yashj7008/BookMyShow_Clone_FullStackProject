import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import MovieList from '../features/movieList/MovieList'

const HomePage = () => {
  return (
    <>
      <DashboardLayout title={"Movies"}><MovieList/></DashboardLayout>
    </>
  )
}

export default HomePage