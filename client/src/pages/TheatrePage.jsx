import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import TheatreList from '../features/theatres/TheatreList'

const ShowPage = () => {
  return (
    <>
      <DashboardLayout title={"Theatre"}><TheatreList/></DashboardLayout>
    </>
  )
}

export default ShowPage