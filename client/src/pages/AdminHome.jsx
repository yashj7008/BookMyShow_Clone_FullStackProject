import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import AdminMovieList from '../features/admin/AdminMovieList'

const AdminHome = () => {
  return (
    <div>
        <DashboardLayout><AdminMovieList/></DashboardLayout>
    </div>
  )
}

export default AdminHome