import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Show from '../features/shows/Show'

const ShowPage = () => {
  return (
    <>
      <DashboardLayout title={"Shows"}><Show/></DashboardLayout>
    </>
  )
}

export default ShowPage