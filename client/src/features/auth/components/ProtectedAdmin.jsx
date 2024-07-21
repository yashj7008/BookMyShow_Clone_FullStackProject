import React from 'react'
import { Navigate } from 'react-router-dom'
import {selectLoggedInUser } from '../authSlice'
import {  useSelector } from 'react-redux'

const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectLoggedInUser)
     
    if(!user) {
        return <Navigate to="/login" replace={true}></Navigate>
    }

    if( user && user.role !== 'ADMIN'){
        return <Navigate to="/" replace={true}></Navigate>
        
    }
  
    return children;
    
}

export default ProtectedAdmin