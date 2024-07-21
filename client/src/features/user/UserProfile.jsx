import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {selectLoggedInUser,checkAuthAsync}from '../auth/authSlice'

const UserProfile = () => {
  const userInfo = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(checkAuthAsync())
  },[])

  return (
    <div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            Name: {userInfo.fullName ? userInfo.fullName : 'New User'}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            Email address : {userInfo.email}
          </h3>
          {userInfo.role === 'ADMIN' && (
            <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              Role : {userInfo.role}
            </h3>
          )}
        </div> </div>
  )
}

export default UserProfile