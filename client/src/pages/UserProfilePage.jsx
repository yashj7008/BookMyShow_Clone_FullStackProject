import React from 'react'
import UserProfile from '../features/user/UserProfile'
import DashboardLayout from '../layouts/DashboardLayout'

const UserProfilePage = () => {
  return (
    <>
      
      <DashboardLayout title={"User Profile"}><UserProfile/></DashboardLayout>
    </>
  )
}

export default UserProfilePage